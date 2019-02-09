import React from "react";
import { Card } from "semantic-ui-react";

const QuestionCard = props => (
  <Card style={{ width: "100%" }}>
    <Card.Content>
      <Card.Header>{props.question.text}</Card.Header>
      <Card.Meta>Co-Worker</Card.Meta>
      <Card.Description>
        Matthew is a pianist living in Nashville.
      </Card.Description>
    </Card.Content>
  </Card>
);

export default QuestionCard;
