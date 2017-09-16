import React from 'react';
import ReactDOM from 'react-dom';
var axios = require ('axios');


function getRandom(arr) {
  var max = Math.floor(arr.length);
  return (arr[Math.floor(Math.random() * (max))]);
}
class GetQuestions extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      question: "",
      answer: "",
      reveal: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReveal = this.handleReveal.bind(this);
  }
  
  handleClick(){
    // GET A QUESTION FROM DATABASE
    this.setState({reveal:false});
    axios.get('/1')
    .then(function(response){
        var dats = getRandom(response.data);
        this.setState({question: dats.question, answer: dats.answer});
    }.bind(this))
    .catch(function(error){
      console.log(error)
    })
  }
  handleReveal(){
    this.setState({reveal: true})
  }
  render(){
    return (
        <div>
          <button onClick={this.handleClick}>Q ME</button>
          <div>Question: {this.state.question}</div>
          <div id='answer' onClick={this.handleReveal}>Answer: {this.state.reveal ? this.state.answer : null} </div>
        </div>  
      )
  }
}
export default GetQuestions;