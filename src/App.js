import React, {Component} from 'react';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TodoTask from './components/TodoTask';
import './components/styles/App.css';


class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			task: 0;
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
				<TodoList id='todolist-1' className='todolist'>
					<TodoItem id='todoitem-1' className='todoitem'>
						<TodoTask id={this.addDateToTask} className='todotask' />
					<\TodoItem>
				<\TodoList>
				<TodoList id='todolist-2' className='todolist'>
					<TodoItem id='todoitem-2' className='todoitem'>
						<TodoTask id={this.addDateToTask} className='todotask' />
					<\TodoItem>
				<\TodoList>
	
}

export default App;