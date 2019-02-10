import React from "react";
import { connect } from "react-redux";
import { Card, Feed } from 'semantic-ui-react'
import MostActiveCard from './MostActiveCard'


const RightBar = ({candidates}) => {
    return (
            <Card>
                <Card.Content>
                    <Card.Header>Aktyviausi atsakynėtojai</Card.Header>
                </Card.Content>
                <Card.Content>
                    {candidates.map((candidate, i) =>
                        <MostActiveCard candidate={candidate} answersCount={Math.round(794/(3+i))} key={i}/>)}
                </Card.Content>
            </Card>

    );
};

const mapStateToProps = state => ({
    candidates: state.users
        .filter(user => user.isPolitician === true),
    answers: state.answers
});

const mapDispatchToProps = dispatch => ({
    onFilterCategory: categoryId =>
        dispatch({
            type: "FILTER_SET",
            payload: {
                value: categoryId,
                type: "CATEGORY_FILTER",
                predicate: question => question.categories.includes(categoryId)
            }
        }),
    onClearFilters: () => dispatch({ type: "FILTER_CLEAR" })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RightBar);
