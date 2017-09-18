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
      id: "",
      reveal: false,
      correctedAnswer: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReveal = this.handleReveal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  
  handleClick(){
    // GET A QUESTION FROM DATABASE
    this.setState({reveal:false});
    axios.get('/1')
    .then(function(response){
        var dats = getRandom(response.data);
        this.setState({question: dats.question, answer: dats.answer, id: dats._id});
    }.bind(this))
    .catch(function(error){
      console.log(error)
    })
  }
  handleReveal(){
    this.setState({reveal: true})
  }
  handleDelete(){
    console.log(this.state.id); 
    axios.delete('/1', {id: this.state.id} )
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    })
  }
  handleUpdate(){
    axios.put('/1', {id: this.state.id})
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
          <button onClick={this.handleClick}>Q ME</button>
          <div>Question: {this.state.question}</div>
          <div id='answer'>Answer: {this.state.reveal ? this.state.answer : null} </div>
          <button onClick={this.handleReveal}>Aw geez I don't know</button>
          <button onClick={this.handleDelete}>I don't like this question very much</button>
          <button onClick={this.handleUpdate}>That's not the right answer...</button>
          <form>
            <input type="text" />
          </form>
        </div>  
      )
  }
}
export default GetQuestions;