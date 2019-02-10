import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Grid } from 'semantic-ui-react';
import QuestionCard from './QuestionCard';
class CandidatePage extends Component {
    
    getAnswers = (questions) => {
        if (questions.length) {
            return questions.map(question => (
                <QuestionCard
                key={question.id}
                question={question}
                answers={question.answers}
            />));
        }

        return (
            <div>
                Nėra atsakymų
            </div>
        );
    }

    render() {
        const candidateId = parseInt(this.props.match.params.id);
        const candidate = this.props.candidates
                .find(u => u.id === candidateId);

        const questions = this.props.questions
            .map(question => {
                question.answers = question.answers
                    .filter(answer => answer.userId === candidateId)
                return question;
            })
            .filter(question => question.answers.length);

        return (
            <div>
                <Container style={{ padding: '10px', marginTop: '50px', display: 'flex' }}>
                    <div>
                        <img src={candidate.photo} alt="" style={{ maxWidth: 400, display: 'inline-block', 'border-radius': '10%' }} />
                    </div>
                    <div style={{ marginLeft: 20, width: '100%' }}>
                        <Header as='h1' style={{ marginBottom: 0 }}>{candidate.name}</Header>
                        <Header as='h3' style={{ marginTop: 5 }}>{candidate.party.title}</Header>
                        <Container text>
                            {candidate.description}
                        </Container>
                    </div>
                </Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={2} />
                        <Grid.Column width={10}>
                            {this.getAnswers(questions)}
                        </Grid.Column>
                        <Grid.Column width={2} />
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    candidates: state.users.filter(user => user.isPolitician)
                    .map(user => {
                        user.party = state.parties.find(p => p.id === user.partyId)
                        return user;
                    }),
    questions: state.questions
        .map(question => {
            question.user = state.users.find(user => user.id === question.userId);
            question.answers = state.answers
                .filter(answer => answer.questionId === question.id)
                .map(answer => {
                    answer.user = state.users.find(user => user.id === answer.userId);
                    answer.user.party = state.parties.find(
                    party => answer.user.partyId === party.id
                    );
                    return answer;
                });
            return question;
        })
        .sort((q1, q2) => {
            const condition = q1.points - q2.points;
            if (condition > 0) return -1;
            if (condition < 0) return 1;
            return 0;
        })

});

export default connect(mapStateToProps, null)(CandidatePage);