import React from "react";
import { Grid } from "semantic-ui-react";
import {connect} from "react-redux";
import PartyCandidates from "./PartyCandidates";

const getPartyCandidates = (users, partyId) => {
    // getCandidates().mapByCandidateFlag().

    return users.map(user =>
        user.isPolitician === true
        && user.partyId === partyId) // gaunam politikus
    // getParties()
    // map parties with candidates
}

const CandidatePage = ({parties, users}) => {
    return (
        <Grid celled="internally">
            <Grid.Row>
                {parties.map((party, i) =>
                    <PartyCandidates
                        candidates={getPartyCandidates(users, party.id)}
                        key={i} />)
                }
            </Grid.Row>
        </Grid>
    );
};

const mapStateToProps = state => ({
    users: state.users,
    parties: state.parties,
});

export default connect(mapStateToProps, null)(CandidatePage);