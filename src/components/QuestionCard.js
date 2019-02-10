import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

const styles = {
  counters: {
    padding: "5px 0 5px 10px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

const Answer = ({ answer }) => (
  <div>
    <div style={{ display: "flex" }}>
      <img
        src={answer.user.photo}
        style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        alt="avatar"
      />
      <div
        style={{ marginLeft: "10px", display: "flex", flexDirection: "column" }}
      >
        <b>{answer.user.name}</b>
        <i>{answer.user.party.title}</i>
      </div>
    </div>
    <div style={{ marginTop: "10px" }}>{answer.text}</div>
  </div>
);

class QuestionCard extends Component {
  state = {
    showingMore: false
  };

  onShowMore = () =>
    this.setState(state => ({
      showingMore: !state.showingMore
    }));

  getAnswersSingle(answers) {
    if (answers.length) {
      const answer = answers[Math.floor(Math.random() * answers.length)];

      return (
        <div style={{ marginTop: "30px" }}>
          <Answer answer={answer} />
          {answers.length - 1 > 0 ? (
            <div className="view-more-answers" onClick={this.onShowMore}>
              Žiūrėti kitus atsakymus...
            </div>
          ) : (
            ""
          )}
        </div>
      );
    }

    return <div>Dar nėra atsakymų.</div>;
  }

  getAnswersAll(answers) {
    if (answers.length) {
      return answers.map(answer => (
        <div style={{ marginTop: "30px" }} key={answer.id}>
          <Answer answer={answer} />
        </div>
      ));
    }

    return <div>Dar nėra atsakymų.</div>;
  }

  getAnswers() {
    const answers = this.props.answers;
    if (!this.state.showingMore) {
      return this.getAnswersSingle(answers);
    }

    return this.getAnswersAll(answers);
  }

  render() {
    return (
      <Card style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <div style={styles.counters}>
          <span style={{ cursor: "pointer" }}>
            <Icon
              name="angle up"
              onClick={() => this.props.incCounter(this.props.question)}
            />
          </span>
          <div style={{ margin: "0 .25rem 0 0" }}>
            {this.props.question.points}
          </div>
          <span style={{ cursor: "pointer" }}>
            <Icon
              name="angle down"
              onClick={() => this.props.decCounter(this.props.question)}
            />
          </span>
        </div>
        <Card.Content>
          <Card.Header>{this.props.question.text}</Card.Header>
          <Card.Meta>
            {this.props.question.user.name}
            {this.props.question.user.name
              ? ", " + this.props.question.user.subtitle
              : ""}
            {" (" + this.props.question.createdAt.fromNow() + ")"}
          </Card.Meta>
          <Card.Description>{this.getAnswers()}</Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  incCounter: question =>
    dispatch({
      type: "QUESTION_UPDATE",
      payload: {
        ...question,
        points: question.points + 1
      }
    }),
  decCounter: question =>
    dispatch({
      type: "QUESTION_UPDATE",
      payload: {
        ...question,
        points: question.points - 1
      }
    })
});

export default connect(
  null,
  mapDispatchToProps
)(QuestionCard);
