import React from "react";
import { connect } from "react-redux";
import { Grid, Image, Divider } from "semantic-ui-react";
import QuestionCard from "./QuestionCard";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar/RightBar";
import NewQuestion from './NewQuestion';

const FeedGrid = ({ questions, filters }) => {
  filters.forEach(filter => {
    questions = questions.filter(filter.predicate);
  });

  questions = questions.filter(question => question.answers.length);

  return (
    <Grid celled="internally">
      <Grid.Row>
        <Grid.Column width={3}>
          <LeftBar atsakyti={true} />
        </Grid.Column>
        <Grid.Column width={10}>
          <NewQuestion />
          <Divider />
          {questions.map(question => (
            <QuestionCard
              key={question.id}
              question={question}
              answers={question.answers}
            />
          ))}
        </Grid.Column>
        <Grid.Column width={3}>
          <RightBar />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const mapStateToProps = state => ({
  filters: state.filters,
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
    })
});

export default connect(
  mapStateToProps,
  null
)(FeedGrid);
