import React from 'react'
import ReactDOM from 'react-dom'
var axios = require('axios');

class QuestionEntry extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      question: '',
      answer: ''
    }
    this.handleQuestion = this.handleQuestion.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleQuestion(e){
    this.setState({question: e.target.value})
  }
  handleAnswer(e){
    this.setState({answer: e.target.value})
  }

  handleSubmit(){
    // SEND TO DATABASE
    axios.post('/1', {question: this.state.question , answer: this.state.answer})
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  render(){
    return (
        <div>
          <div>Submit a Q!</div>
          <form onSubmit={this.handleSubmit}>
            <input type='text' onChange={this.handleQuestion}/>
            <input type='text' onChange={this.handleAnswer}/>
            <input type='submit' value='Submit'/>
          </form>
        </div>  
      )
  }
}
export default QuestionEntry;