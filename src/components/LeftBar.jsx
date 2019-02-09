import React from "react";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

const SingleCategory = ({ name, iconName, questionAmount }) => {
  return (
    <List.Item>
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
          name={category.title}
          iconName={category.icon}
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

export default connect(
  mapStateToProps,
  null
)(LeftBar);
