import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const CandidateCard = ({candidate}) => {
    console.log(candidate);
    return (
        <Card>
            <Image src={candidate.photo} size='medium'/>
            <Card.Content>
                <Card.Header>{candidate.name}</Card.Header>
                <Card.Meta>
                    {candidate.subtitle}
                </Card.Meta>
                <Card.Description>{candidate.party}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='question circle'/>
                    3 atsakyti klausimai
                </a>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='phone volume'/>
                    Paskutinį kart aktyvus prieš 6 valandas
                </a>
            </Card.Content>
        </Card>
    );
};
export default CandidateCard
