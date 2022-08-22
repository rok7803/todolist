import React, { Component } from "react";
import './TodoItems.css';
 
class TodoItems extends Component {
    constructor(props) {
        super(props);
		
		this.state = {
			items: [],
			completedTasks: [],
			draggedTask: {}
		}
		//this.onDrag = this.onDrag.bind(this);
		//this.onDrop = this.onDrop.bind(this);
		//this.onDragOver = this.onDragOver.bind(this);
		this.allowDrop = this.allowDrop.bind(this);
		this.drag = this.drag.bind(this);
		this.drop = this.drop.bind(this);
		this.deleteItems = this.deleteItems.bind(this);
        this.createTasks = this.createTasks.bind(this);
		//this.completedTasks = this.completedTasks.bind(this);
    }
	/*onDrag(e, item){
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
	}*/
	allowDrop(ev) {
		ev.preventDefault();
	}

	drag(ev) {
		console.log(ev.target.key);
		ev.dataTransfer.setData("text", ev.target.key);
	}

	drop(ev) {
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text");
		console.log(data);
		ev.target.appendChild(document.getElementById(data));
	}
	deleteItems(){
		let items = this.state.items;
		items.length = 0;
		this.setState=({
			items: items
		});
		console.log('deleteITEMS; this.state.items: ',this.state.items)
		//let items = this.state.items;
		//items = [];
		//this.state.items = [];
	}
    delete(key) {
        this.props.delete(key);
    }
    createTasks(item) {
		//this.deleteItems();
		let items = this.state.items;
		
		console.log('CREATETASKS: items.length | item.key: ',items.length,' | ',item.key);
		
		const count = items.length;
		
		for(let i=0;i<=count;i++){
			if(items[i] === undefined){
				//if(i === count){
					console.log('UNDEFINED!');
					console.log('else if: item.key: ', item.key);
					console.log('else if: i | items.length: ', i,' | ',items.length);
					items.push({key: item.key, text: item.text});
					//completedTasks.push(item.key);
				//}
			}
			else console.log('else; i | items.length: ', i,' | ',items.length);		
		}
		//console.log(this.state.items);
		//this.deleteItems();
		return (
			<li key={item.key} draggable onDragStart={(e) => this.drag(e)} >
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
    render() {
		//console.log(this.props.entries.key);
		/*this.setState=({
			key: this.props.entries.key,
		});*/
		this.deleteItems();
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
    
        return (
			<div>
				<div className='div-list'>
					<ul className="theList"
						onDragOver={e => this.allowDrop(e)}
						onDrop={e => this.drop(e)}
						> 
						{listItems}
					</ul>
				</div>
				<div className='div-list-done'>
					<ul className="theList-done"
						onDragOver={e => this.allowDrop(e)}
						onDrop={e => this.drop(e)}
						>
					</ul>
				</div>
			</div>
        );
    }
};
 
export default TodoItems;