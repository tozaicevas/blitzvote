import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";

const styles = {
  counters: {
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  }
};

class QuestionCard extends Component {
  increaseCounter = () => {
    this.props.question.points++;
  };
  
  decreaseCounter = () => {
    this.props.question.points--;
  };

  render() {
    return (
      <Card style={{ width: "100%", display: 'flex', flexDirection: 'row' }}>
        <div style={styles.counters}>
          <Icon name='angle up' onClick={this.increaseCounter} />
          {this.props.question.points}
          <Icon name='angle down' onClick={this.decreaseCounter}/>
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

export default QuestionCard;
