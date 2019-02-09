import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";
import { connect } from 'react-redux';

const styles = {
  counters: {
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  }
};

class QuestionCard extends Component {
  render() {
    return (
      <Card style={{ width: "100%", display: 'flex', flexDirection: 'row' }}>
        <div style={styles.counters}>
          <Icon name='angle up' onClick={() => this.props.incCounter(this.props.question)} />
          {this.props.question.points}
          <Icon name='angle down' onClick={() => this.props.decCounter(this.props.question)}/>
        </div>
        <Card.Content>
          <Card.Header>{this.props.question.text}</Card.Header>
          <Card.Meta>Co-Worker</Card.Meta>
          <Card.Description>
            Matthew is a pianist living in Nashville.
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
