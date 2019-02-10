import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CandidateCard = ({ candidate }) => {
  return (
    <Card>
      <Image
        src={candidate.photo}
        size="medium"
        style={{ height: "15em", cursor: "pointer" }}
      />
      <Card.Content>
        <Card.Header style={{ cursor: "pointer" }}>
          {candidate.name}
        </Card.Header>
        <Card.Meta>{candidate.subtitle}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="question circle" />
          {Math.floor(Math.random() * 3) + 1} atsakyti klausimai
        </a>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="phone volume" />
          Paskutinį kart aktyvus prieš {Math.floor(Math.random() * 9) + 1}{" "}
          valandas
        </a>
      </Card.Content>
    </Card>
  );
};
export default CandidateCard;
