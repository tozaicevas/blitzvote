import React from "react";
import { connect } from "react-redux";
import { Grid, Image } from "semantic-ui-react";
import QuestionCard from "./QuestionCard";
import LeftBar from "./LeftBar";

const FeedGrid = ({ questions }) => {
  return (
    <Grid celled="internally">
      <Grid.Row>
        <Grid.Column width={3}>
          <LeftBar />
        </Grid.Column>
        <Grid.Column width={10}>
          {questions.map(question => <QuestionCard key={question.id} question={question} />)}
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  questions: state.questions.map(question => {
    question.user = state.users.find(user => user.id === question.userId);
    return question;
  })
});

export default connect(mapStateToProps, null)(FeedGrid);
