import React, { Component } from "react";
import TodoTasks from './TodoTasks'
import './TodoItems.css';
 
class TodoItems extends Component {
    /*constructor(props) {
        super(props);
		this.ref = React.createRef();
		this.state = {
			elements: [],
			elementToDrag: '',
			elementToDragId: ''
		}
		this.onDrag = this.onDrag.bind(this);
		this.onDrop = this.onDrop.bind(this);
		this.onDragOver = this.onDragOver.bind(this);
		//this.allowDrop = this.allowDrop.bind(this);
		//this.drag = this.drag.bind(this);
		//this.drop = this.drop.bind(this);
		this.clearItems = this.clearItems.bind(this);
        this.createTasks = this.createTasks.bind(this);
		//this.completedTasks = this.completedTasks.bind(this);
    }
	onDrag(e, item){
		let elementToDragId = this.state.elementToDragId;
		let elementToDrag = this.state.elementToDrag;
		const elements = this.state.elements;
		elementToDragId = e.target.id;
		
		elementToDrag = elements.filter( index => {
			if (index.props.id === elementToDragId) return index;
			else return console.log('No element!');
		});
		
		console.log('INSIDE onDrag; elementToDragId | elementToDrag[0].props.id: ',elementToDragId,' | ', elementToDrag[0].props.id);
		console.log('INSIDE onDrag: elementToDrag: ',elementToDrag);
		this.setState = ({
			elementToDrag: elementToDrag
		});
	}
	onDragOver(e){
		e.preventDefault();
	}
	onDrop(e){
		let {elementToDrag, elementToDragId} = this.state;
		console.log('INSIDE onDrop; elementToDrag: ',elementToDrag);
		elementToDrag = '';
		elementToDragId = '';
		this.setState = ({
			elementToDrag: elementToDrag,
			elementToDragId: elementToDragId
		});
	}*/
	constructor(props) {
		super(props);
		this.state = {
		  todos: [],
		  completedTasks: [],
		  draggedTask: {}
		}
		this.onDrag = this.onDrag.bind(this);
		this.onDrop = this.onDrop.bind(this);
		this.onDragOver = this.onDragOver.bind(this);
		this.clearItems = this.clearItems.bind(this);
		this.createTasks = this.createTasks.bind(this);
	}


	onDragOver(event){
		event.preventDefault();
	}

	onDrop(event){
		//event.preventDefault();
		let { completedTasks, draggedTask, todos } = this.state;
		todos = todos.filter(index => index.props.id !== draggedTask[0].props.id);
		const draggedTaskElement = draggedTask[0];
		console.log('INSIDE onDrop; draggedTaskElement: ',draggedTaskElement);
		console.log('INSIDE onDrop; todos: ',todos);		
		//console.log('INSIDE onDrop; todos[0].props.id | draggedTask[0].props.id: ',todos[0].props.id,'|',draggedTask[0].props.id);
		completedTasks.push(draggedTaskElement);
		console.log('INSIDE onDrop; completedTasks: ',completedTasks);
		this.setState=({
			completedTasks: completedTasks,
			todos: todos,
			draggedTask: {}
		});
		//console.log('INSIDE onDrop; this.state.todos: ',this.state.todos);
	}
	/*clearItems(){
		let todos = this.state.todos;
		todos.length = 0;
		this.setState=({
			todos: todos
		});
		console.log('clearITEMS; this.state.todos: ',this.state.todos);
	}*/
    
    /*createTasks(item) {
		const todos = this.state.todos;
		
		const element = (
			<li key={item.key} id={'id-key:'+item.key} draggable onDrag={(e) => this.onDrag(e, item)} >
				<button onClick={() => this.delete(item.key)}>
					<svg width="24" height="24" viewBox="0 0 24 24">
						<path d="M0 0h24v24H0z" fill="none"></path>
						<path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
					</svg>
				</button>
				<label>
					<input type="checkbox" /> 
					 {item.text}
				</label>
			</li>   
		);
		
		todos.push(element);
		
		this.setState = ({
			todos: todos
		});
    }*/
    render() {
		/*console.log('INSIDE render');
		this.clearItems();
        const todoEntries = this.props.entries;
		todoEntries.forEach(this.createTasks);
		const {todos, completedTasks} = this.state;
		const listItems = todos.map(index => {return index});
		//const elementToDrag = this.state.elementToDrag;
		const listItemsCompleted = completedTasks.map(index => {return index});
		console.log('INSIDE render; listItems: ', listItems);
		console.log('INSIDE render; listItemsCompleted: ', listItemsCompleted);*/
    
        return (
			<div>
				<TodoTasks entries={this.props.entries} delete={this.props.delete}/>
			</div>
        );
    }
};
 
export default TodoItems;