import React from "react";
import { Grid, Container } from "semantic-ui-react";
import {connect} from "react-redux";


import PartyCandidates from "./PartyCandidates";

const CandidatePage = (props) => {
    //console.log(props);
    return (
        <Grid celled="internally">
            <Grid.Row>
                <Container>
                    {props.parties.map((party, i) =>
                            <PartyCandidates party={party} key={i}/>
                    )}
                </Container>
            </Grid.Row>
        </Grid>
    );
};

const mapStateToProps = state => ({
    parties: state.parties,
});

export default connect(mapStateToProps, null)(CandidatePage);
