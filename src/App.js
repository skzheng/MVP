import React from 'react';
import ReactDOM from 'react-dom';
import GetQuestion from './GetQuestion';
import QuestionEntry from './QuestionEntry';

class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
		}
	}

	render(){
		return (
				<div>
						<QuestionEntry />
						<br></br>
						<GetQuestion />
				</div>	
			)
	}
}

ReactDOM.render(
	<App />, document.getElementById('app')
);
