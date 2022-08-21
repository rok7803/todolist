import React, { Component } from "react";
import './TodoItems.css';
 
class TodoItems extends Component {
    constructor(props) {
        super(props);
		
		this.state = {
			item: [],
			completedTasks: [],
			draggedTask: {}
		}
		this.onDrag = this.onDrag.bind(this);
		this.onDrop = this.onDrop.bind(this);
		this.onDragOver = this.onDragOver.bind(this);
        this.createTasks = this.createTasks.bind(this);
		this.completedTasks = this.completedTasks.bind(this);
    }
	onDrag(e, item){
		//console.log(e);
		e.preventDefault();
		this.setState({
			draggedTask: item
		});
	}
	onDragOver(e){
		e.preventDefault();
	}
	onDrop(e){
		const { item, completedTasks, draggedTask } = this.state;
		this.setState({
			completedTasks: [...completedTasks, draggedTask],
			item: item.filter( item => item.key !== draggedTask.key),
			draggedTask: {},
		});
	}
    delete(key) {
        this.props.delete(key);
    }
    createTasks(item) {
		this.state.item.push({key: item.key, text: item.text});
		return (
			<li key={item.key} draggable onDrag={(e) => this.onDrag(e, item)} >
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
    }
    completedTasks(item){
		console.log('this.state.item: ',this.state.item);
		return(
			this.state.completedTasks.map(item =>
				<li key={item.key} draggable='false' onDrag={(e) => this.onDrag(e, item)} >
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
			)
		);
	}
    render() {
		//console.log(this.props.entries.key);
		/*this.setState=({
			key: this.props.entries.key,
		});*/
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
		
		const {item} = this.state;
		
		/*if(true)*/ //console.log('listItems: ',listItems[0].type);
    
        return (
			<div>
				<div className='div-list'>
					<ul className="theList"> 
						{listItems}
					</ul>
				</div>
				<div className='div-list-done'
					onDragOver={e => this.onDragOver(e)}
					onDrop={e => this.onDrop(e)}
					>
					<ul className="theList-done">
						{this.completedTasks(item)}
					</ul>
				</div>
			</div>
        );
    }
};
 
export default TodoItems;