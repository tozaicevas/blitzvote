import React from "react";
import { connect } from "react-redux";
import { List, Icon } from "semantic-ui-react";

const SingleCategory = ({
  name,
  iconName, iconColor,
  questionAmount,
  onClick,
  styled
}) => {
  return (
    <List.Item
      style={styled ? { backgroundColor: "#e5e5e5" } : {}}
      onClick={onClick}
    >
      <Icon name={iconName} color={iconColor} size="large" />
      <List.Content>
        <List.Header>
          {name}
          <List.Content floated="right">{questionAmount}</List.Content>
        </List.Header>
      </List.Content>
    </List.Item>
  );
};

class LeftBar extends React.Component {
  state = { currentCategoryId: null };
  render() {
    const questions = this.props.questions.filter(question =>
      this.props.atsakyti ? question.answers.length : !question.answers.length
    );
    return (
      <List selection verticalAlign="middle">
        <List.Item
          style={
            !this.state.currentCategoryId ? { backgroundColor: "#e5e5e5" } : {}
          }
          onClick={() => {
            this.setState({ currentCategoryId: null });
            this.props.onClearFilters();
          }}
        >
          <Icon name="question circle" size="large" />
          <List.Content>
            <List.Header>
              All
              <List.Content floated="right">{questions.length}</List.Content>
            </List.Header>
          </List.Content>
        </List.Item>
        {this.props.categories.map(category => (
          <SingleCategory
            styled={category.id === this.state.currentCategoryId}
            key={category.id}
            name={category.title}
            iconName={category.icon}
            iconColor={category.color}
            onClick={() => {
              this.setState({ currentCategoryId: category.id });
              this.props.onFilterCategory(category.id);
            }}
            questionAmount={
              questions.filter(question =>
                question.categories.includes(category.id)
              ).length
            }
          />
        ))}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions
    .map(question => {
      question.user = state.users.find(user => user.id === question.userId);
      question.answers = state.answers
        .filter(answer => answer.questionId === question.id)
        .map(answer => {
          answer.user = state.users.find(user => user.id === answer.userId);
          answer.user.party = state.parties.find(
            party => answer.user.partyId === party.id
          );
          return answer;
        });
      return question;
    })
    .sort((q1, q2) => {
      const condition = q1.points - q2.points;
      if (condition > 0) return -1;
      if (condition < 0) return 1;
      return 0;
    }),
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  onFilterCategory: categoryId =>
    dispatch({
      type: "FILTER_SET",
      payload: {
        value: categoryId,
        type: "CATEGORY_FILTER",
        predicate: question => question.categories.includes(categoryId)
      }
    }),
  onClearFilters: () => dispatch({ type: "FILTER_CLEAR" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftBar);
