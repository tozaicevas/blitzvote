import React from "react";
import { Grid, Image } from "semantic-ui-react";
import QuestionRepository from "../repositories/QuestionRepository";
import QuestionCard from "./QuestionCard";

const AllGridRows = () => {
  return QuestionRepository.getAll().map(question => {
    console.log(question);
    return (
      <Grid.Row>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
        </Grid.Column>
        <Grid.Column width={10}>
          <QuestionCard question={question} />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
        </Grid.Column>
      </Grid.Row>
    );
  });
};

const FeedGrid = () => {
  return (
    <Grid celled="internally">
      <AllGridRows />
    </Grid>
  );
};

export default FeedGrid;
