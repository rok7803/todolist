import React, {Component} from 'react';
import TodoList from './components/TodoList';
//import TodoItem from './components/TodoItem';
//import TodoTask from './components/TodoTask';
import './components/styles/App.css';


class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			task: 0,
		}
		this.addDateToTask = this.addDateToTask.bind(this);
	}
	addDateToTask(){
		const dateKey = new Date();
		return dateKey;
	}
	render(){
		return(
			<div className='App'>
				<TodoList id='todolist-1' className='todolist'/>
			</div>
		);
	}
	
}

export default App;