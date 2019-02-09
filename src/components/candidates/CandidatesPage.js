import React from "react";
import { Grid, Image } from "semantic-ui-react";
import QuestionRepository from "../../repositories/QuestionRepository";
import QuestionCard from "../QuestionCard";
import CandidateCard from "./PartyCandidates";

const AllQuestionCards = () => {
    return QuestionRepository.getAll().map(question => {
        return <QuestionCard key={question.id} question={question} />;
    });
};

const parties =



const CandidatePage = () => {
    return (
        <Grid celled="internally">
            <Grid.Row>
                {parties.map((party, i) =>
                    <PartyCandidates candidates={party.candidates}
                                     key={i} />
                                     )}
            </Grid.Row>
        </Grid>
    );
};