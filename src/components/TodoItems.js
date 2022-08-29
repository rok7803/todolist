import React, { Component } from "react";
import TodoTasks from './TodoTasks'
import './styles/TodoItems.css';
 
class TodoItems extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  todos: [],
		  completedTasks: [],
		  draggedTask: {}
		}
		this.onDrop = this.onDrop.bind(this);
		this.onDragOver = this.onDragOver.bind(this);
	}


	onDragOver(event){
		event.preventDefault();
	}

	onDrop(event){
		event.preventDefault();
		const itemId = event.dataTransfer.getData('item-id');
		console.log(itemId);
		
		//event.target.appendChild(document.getElementById(itemId));
	}
    
    render() {
    
        return (
			<div className="div-list">
				<ul className="theList"
					onDrop={this.onDrop}
					onDragOver={this.onDragOver}
					>
					<TodoTasks entries={this.props.entries} delete={this.props.delete}/>
				</ul>
			</div>
        );
    }
};
 
export default TodoItems;