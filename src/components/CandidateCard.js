import React from 'react';
import { Card } from 'semantic-ui-react';

export const CandidateCard = (props) => (
    <Card style={{ width: '20%' }}>
        <Card.Content >
            <Card.Header>{props.user.name}</Card.Header>
            <Card.Meta>Co-Worker</Card.Meta>
            <Card.Description>Matthew is a pianist living in Nashville.</Card.Description>
        </Card.Content>
    </Card>
);