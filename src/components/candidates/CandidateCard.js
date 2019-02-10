import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { NavLink } from 'react-router-dom';

const CandidateCard = ({ candidate }) => {
  return (
    <NavLink to={"/kandidatai/" + candidate.id} style={{ marginLeft: 10 }} >
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
            <Icon name="question circle" />
            {Math.floor(Math.random() * 3) + 1} atsakyti klausimai
        </Card.Content>
        <Card.Content extra>
            <Icon name="phone volume" />
            Paskutinį kart aktyvus prieš {Math.floor(Math.random() * 9) + 1}{" "}
            valandas
        </Card.Content>
      </Card>
    </NavLink>
  );
};
export default CandidateCard;
