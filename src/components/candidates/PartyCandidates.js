import React from 'react'
import CandidateCard from "./CandidateCard";
import {Card, Container, Divider, Header, Image} from 'semantic-ui-react'
import {connect} from "react-redux";

const PartyCandidates = ({party, politicians}) => {

    const candidates = politicians.filter(p => p.partyId === party.id);
    console.log(candidates);
    return (
        <div style={{ margin: '1.5em 0 0 0' }}>

            <Header size='large' style={{ marginBottom: '1.5em' }}>
                <Image src={party.icon} size='large'/>
                {party.title}
            </Header>
            {candidates.length > 0 ?
                <Card.Group>
                    {candidates.map((candidate, i) =>
                        <CandidateCard candidate={candidate} key={i}/>)}
                </Card.Group> : null
            }
            < Divider style={{ marginTop: '2em' }}/>
        </div>
    );
};

const mapStateToProps = state => ({
    politicians: state.users
        .filter(user => user.isPolitician === true)
});

export default connect(
    mapStateToProps,
    null
)(PartyCandidates);
