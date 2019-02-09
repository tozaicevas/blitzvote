import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { connect } from 'react-redux';

const styles = {
  counters: {
    padding: '5px 0 5px 10px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

class QuestionCard extends Component {

  getDescription() {
    const answers = this.props.answers;
    if (answers.length) {
      const answer = answers[Math.floor(Math.random() * answers.length)];

      return (
        <div style={{ marginTop: '30px' }}>
          <div style={{ display: 'flex' }}>
            <img src={answer.user.photo} style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="avatar"/>
            <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column' }} >
              <b>{answer.user.name}</b>
              <i>{answer.user.party.title}</i>
            </div>
          </div>
          <div style={{ marginTop: '10px' }}>
            {answer.text}
          </div>
        
          {(answers.length - 1) > 0 ? (
            <div className="view-more-answers">
              Žiūrėti kitus atsakymus...
            </div>
          ) : ''} 
        </div>
      );
    }

    return (
      <div>Dar nėra atsakymų.</div>
    );
  }

  render() {
    return (
      <Card style={{ width: "100%", display: 'flex', flexDirection: 'row' }}>
        <div style={styles.counters}>
          <span style={{ cursor: 'pointer' }}>
            <Icon name='angle up' onClick={() => this.props.incCounter(this.props.question)} />
          </span>
          <div style={{ margin: '0 .25rem 0 0' }}>{this.props.question.points}</div>
          <span style={{ cursor: 'pointer' }}>
            <Icon name='angle down' onClick={() => this.props.decCounter(this.props.question)}/>
          </span>
        </div>
        <Card.Content>
          <Card.Header>{this.props.question.text}</Card.Header>
          <Card.Meta>{this.props.question.user.name}{this.props.question.user.name ? ', ' + this.props.question.user.subtitle : '' }</Card.Meta>
          <Card.Description>
            {this.getDescription()}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  incCounter: (question) => dispatch(({
    type: 'QUESTION_UPDATE',
    payload: {
      ...question,
      points: question.points + 1
    }
  })),
  decCounter: (question) => dispatch(({
    type: 'QUESTION_UPDATE',
    payload: {
      ...question,
      points: question.points - 1
    }
  }))
});

export default connect(null, mapDispatchToProps)(QuestionCard);
