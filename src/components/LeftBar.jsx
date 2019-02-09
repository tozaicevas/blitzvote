import React from "react";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

const SingleCategory = ({ name, iconName, questionAmount, onClick }) => {
  return (
    <List.Item onClick={onClick}>
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

const LeftBar = props => {
  return (
    <List selection verticalAlign="middle">
      {props.categories.map(category => (
        <SingleCategory
          key={category.id}
          name={category.title}
          iconName={category.icon}
          onClick={() => props.onFilterCategory(category.id)}
          questionAmount={
            props.questions.filter(question =>
              question.categories.includes(category.id)
            ).length
          }
        />
      ))}
    </List>
  );
};

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
