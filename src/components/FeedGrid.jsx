import React from "react";
import { Grid, Image } from "semantic-ui-react";
import QuestionRepository from "../repositories/QuestionRepository";
import QuestionCard from "./QuestionCard";

const AllQuestionCards = () => {
  return QuestionRepository.getAll().map(question => {
    return <QuestionCard question={question} />;
  });
};

const FeedGrid = () => {
  return (
    <Grid celled="internally">
      <Grid.Row>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
        </Grid.Column>
        <Grid.Column width={10}>
          <AllQuestionCards />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default FeedGrid;
