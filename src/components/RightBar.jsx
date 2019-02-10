import React from "react";
import { connect } from "react-redux";
import {Card, Feed, Image} from 'semantic-ui-react'


const RightBar = ({candidates}) => {
    const ago = () => Math.floor(Math.random() * 3) + 1  + " day ago";

    return (
            <Card>
                <Card.Content>
                    <Card.Header>Aktyviausieji kandidatai</Card.Header>
                </Card.Content>
                <Card.Content>
                    {candidates.map((candidate => (
                        <Feed>
                            <Feed.Event>
                                <Image
                                    src={candidate.photo}
                                    style={{height:60, width:65, marginRight:5}}
                                    circular
                                />
                                <Feed.Content>
                                    <strong>{candidate.name}</strong>
                                    <Feed.Date style={{marginTop:'2px'}} content={ago()} />
                                    <Feed.Summary>
                                        Atsakė klausimų: {candidate.answersCount}
                                    </Feed.Summary>
                                </Feed.Content>
                            </Feed.Event>
                        </Feed>
                    )))}
                </Card.Content>
            </Card>

    );
};

const mapStateToProps = state => ({
    candidates: state.users
        .filter(user => user.isPolitician)
        .map(user => {
            user.answersCount = state.answers
                .filter(answer => answer.userId === user.id)
                .length;
            return user;
        })
        .sort((q1, q2) => {
            const condition = q1.answersCount - q2.answersCount;
            if (condition > 0) return -1;
            if (condition < 0) return 1;
            return 0;
        })
        .slice(0, 5)
});



export default connect(
    mapStateToProps,
    null
)(RightBar);
