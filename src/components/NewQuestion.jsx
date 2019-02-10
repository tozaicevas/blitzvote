import React, { Component } from 'react';
import { Form, TextArea, Button, Select } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Question from '../models/Question';


class NewQuestion extends Component {
    state = {
        question: '',
        categoriesSelected: []        
    };
    
    onQuestionType = (event) => {
        if (this.state.question.length < 250) {
            this.setState({
                question: event.target.value
            });
        }
    }

    onAddCategory = (event) => {
        const selectedCatId = this.props.categories
            .find(c => c.text == event.nativeEvent.target.querySelector('.text').innerText)
            .value;

        this.setState(state => ({
            categoriesSelected: [ ...state.categoriesSelected, selectedCatId],
        }))
    }

    onAddQuestion = (event) => {
        const newQuestion = new Question(this.props.questions.length + 1, 1, this.state.question, this.state.categoriesSelected);
        this.props.createQuestion(newQuestion);
        this.setState({
            question: '',
            categoriesSelected: []
        });
    }

    render() {
        return (
            <div>
                <Form>
                    <TextArea placeholder='Užduok klausimą kandidatams (iki 250 simbolių)' 
                              style={{ minHeight: 120 }} 
                              value={this.state.question}
                              onChange={this.onQuestionType} />

                    <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                        <Select placeholder='Pasirinkite kategorijas' options={this.props.categories} multiple style={{ width: '100%' }} onChange={this.onAddCategory} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Button primary style={{ marginLeft: 'auto' }} onClick={this.onAddQuestion} >Užduoti</Button>
                    </div>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories.map(category => ({
        key: category.id,
        icon: category.icon,
        value: category.id,
        text: category.title
    })),
    questions: state.questions
});

const mapDispatchToProps = dispatch => ({
    createQuestion: question => dispatch({
        type: 'QUESTION_INSERT',
        payload: question
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);