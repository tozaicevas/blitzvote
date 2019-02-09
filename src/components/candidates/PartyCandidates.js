import React from 'react'
import CandidateCard from "./CandidateCard";
import { Card } from 'semantic-ui-react'

const PartyCandidates = (props) => (
    <Card.Group>
        {props.candidates.map((candidate, i) => <CandidateCard name={candidate.name} key={i} />)}
    </Card.Group>
)

export default PartyCandidates