import React from 'react';
import ReactDOM from 'react-dom';
var axios = require ('axios');


function getRandom(arr) {
  var max = Math.floor(arr.length);
  console.log(arr[Math.floor(Math.random() * (max + 1))]);
}

class GetQuestions extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    // GET A QUESTION FROM DATABASE
    axios.get('/1')
    .then(function(response){
      console.log(getRandom(response.data));
    })
    .catch(function(error){
      console.log(error)
    })
  }

  render(){
    return (
        <div>
          <button onClick={this.handleClick}>Q ME</button>
        </div>  
      )
  }
}
export default GetQuestions;