import React from "react";
import { connect } from "react-redux";
import {Card, Feed, Image} from 'semantic-ui-react'


const RightBar = ({candidates}) => {
    const getCandidate = (id) => candidates.filter(c => c.id === id);
    const ago = () => Math.floor(Math.random() * 3) + 1  + " day ago";

    const candidate1 = getCandidate(12)[0];
    candidate1.answersCount = 241;
    const candidate2 = getCandidate(6)[0];
    candidate2.answersCount = 193;
    const candidate3 = getCandidate(11)[0];
    candidate3.answersCount = 121;
    const candidate4 = getCandidate(9)[0];
    candidate4.answersCount = 72;
    const candidate5 = getCandidate(4)[0];
    candidate5.answersCount = 46;

    return (
            <Card>
                <Card.Content>
                    <Card.Header>Aktyviausieji kandidatai</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Feed>
                        <Feed.Event>
                            <Image
                                src={candidate1.photo}
                                style={{height:60, width:65, marginRight:5}}
                                circular
                            />
                            <Feed.Content>
                                <strong>{candidate1.name}</strong>
                                <Feed.Date style={{marginTop:'2px'}} content={ago()} />
                                <Feed.Summary>
                                    Atsakė klausimų: {candidate1.answersCount}
                                </Feed.Summary>
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>

                    <Feed>
                        <Feed.Event>
                            <Image
                                src={candidate2.photo}
                                style={{height:60, width:65, marginRight:5}}
                                circular
                            />
                            <Feed.Content>
                                <strong>{candidate2.name}</strong>
                                <Feed.Date style={{marginTop:'2px'}} content={ago()} />
                                <Feed.Summary>
                                    Atsakė klausimų: {candidate2.answersCount}
                                </Feed.Summary>
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>

                    <Feed>
                        <Feed.Event>
                            <Image
                                src={candidate3.photo}
                                style={{height:60, width:65, marginRight:5}}
                                circular
                            />
                            <Feed.Content>
                                <strong>{candidate3.name}</strong>
                                <Feed.Date style={{marginTop:'2px'}} content={ago()} />
                                <Feed.Summary>
                                    Atsakė klausimų: {candidate3.answersCount}
                                </Feed.Summary>
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>

                    <Feed>
                        <Feed.Event>
                            <Image
                                src={candidate4.photo}
                                style={{height:60, width:65, marginRight:5}}
                                circular
                            />
                            <Feed.Content>
                                <strong>{candidate4.name}</strong>
                                <Feed.Date style={{marginTop:'2px'}} content={ago()} />
                                <Feed.Summary>
                                    Atsakė klausimų: {candidate4.answersCount}
                                </Feed.Summary>
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>

                    <Feed>
                        <Feed.Event>
                            <Image
                                src={candidate5.photo}
                                style={{height:60, width:65, marginRight:5}}
                                circular
                            />
                            <Feed.Content>
                                <strong>{candidate5.name}</strong>
                                <Feed.Date style={{marginTop:'2px'}} content={ago()} />
                                <Feed.Summary>
                                    Atsakė klausimų: {candidate5.answersCount}
                                </Feed.Summary>
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>

                </Card.Content>
            </Card>

    );
};

const mapStateToProps = state => ({
    candidates: state.users
        .filter(user => user.isPolitician === true),
    answers: state.answers
});



export default connect(
    mapStateToProps,
    null
)(RightBar);
