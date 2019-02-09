import React from 'react';
import {Button, Card, Image} from 'semantic-ui-react';

export const CandidateCard = (props) => (
    <Card>
        <Card.Content>
            <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
            />
            <Card.Header>{props.name}</Card.Header>
            <Card.Meta>{props.meta}</Card.Meta>
            <Card.Description>
                {props.description}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <div className='ui two buttons'>
                <Button basic color='green'>
                    View Profile
                </Button>
            </div>
        </Card.Content>
    </Card>
);