import React from "react";
import { connect } from "react-redux";
import { List, Icon } from "semantic-ui-react";

const SingleCategory = ({
  name,
  iconName,
  questionAmount,
  onClick,
  styled
}) => {
  return (
    <List.Item
      style={styled ? { backgroundColor: "#e5e5e5" } : {}}
      onClick={onClick}
    >
      <Icon name={iconName} size="large" />
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
    return (
      <List selection verticalAlign="middle">
        <List.Item
          style={
            !this.state.currentCategoryId ? { backgroundColor: "#e5e5e5" } : {}
          }
        >
          <Icon name="question circle" size="large" />
          <List.Content>
            <List.Header>
              All
              <List.Content floated="right">
                {this.props.questions.length}
              </List.Content>
            </List.Header>
          </List.Content>
        </List.Item>
        {this.props.categories.map(category => (
          <SingleCategory
            styled={category.id === this.state.currentCategoryId}
            key={category.id}
            name={category.title}
            iconName={category.icon}
            onClick={() => {
              this.setState({ currentCategoryId: category.id });
              this.props.onFilterCategory(category.id);
            }}
            questionAmount={
              this.props.questions.filter(question =>
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
  questions: state.questions,
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
  onClearFilters: dispatch({ type: "FILTER_CLEAR" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftBar);
