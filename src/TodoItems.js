import React, { Component } from "react";
import './TodoItems.css';
 
class TodoItems extends Component {
    constructor(props) {
        super(props);
		this.ref = React.createRef();
		this.state = {
			items: [],
			dropElmtAbove: [],
			dropElmtUnder: [],
			elements: [],
			completedTasks: [],
			draggedTask: {}
		} 
		//this.onDrag = this.onDrag.bind(this);
		//this.onDrop = this.onDrop.bind(this);
		//this.onDragOver = this.onDragOver.bind(this);
		this.allowDrop = this.allowDrop.bind(this);
		this.drag = this.drag.bind(this);
		this.drop = this.drop.bind(this);
		this.clearItems = this.clearItems.bind(this);
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
		//ev.screenY gets 150
		//ev.target.screenY undefined (!needs ev. MouseEvent?)
		//console.log('INSIDE drag:',ev.screenY);
		//ev.clientY gets 71
		//ev.target.clientY undefined (!needs ev. MouseEvent?)
		//console.log('INSIDE drag:',ev.clientY);
		//ev.offsetTop undefined needs ev. MouseEvent
		//ev.target.offsetTop gets 0 
		//console.log('INSIDE drag:',ev.offsetTop);
		//console.log('INSIDE drag:',item.key);
		//console.log('INSIDE drag:',ev.target.id);
		//console.log('INSIDE drag:',this.ref.current);
		ev.dataTransfer.setData("card_id", ev.target.id);
		/*const dropElmtUnder = this.state.dropElmtUnder;
		const elements = this.state.elements;
		dropElmtUnder.push(elements);
		this.setState=({
			dropElmtUnder: dropElmtUnder
		});*/
		//console.log('INSIDE drag; ev.target.id:', ev.target.id);
		//ev.preventDefault();
		//const elements = this.state.elements;
		//const element = elements.map(index => {return index});
		//this.setState=({
			//draggedTask: item
		//});
		//const draggedTask = this.state.draggedTask;
		//console.log('draggedTask',draggedTask);
	}

	drop(ev) {
		//ev.preventDefault();
		//const data = ev.dataTransfer.getData("text");
		//console.log('INSIDE drop; data: ', data);
		//ev.target = this.ref.current;
		//const elements = this.state.elements;
		//const data = this.ref.current;
		//console.log('INSIDE drop; data: ', data);
		//const elements = this.state.elements;
		//elements.push(data);
		//this.setState=({
			//elements: data
		//});
		//this.clearItems();
		const card_id = ev.dataTransfer.getData("text");
		const card = document.getElementById(card_id);
		card.style.display = 'block';
		ev.target.appendChild(card);
		//console.log('INSIDE drop: ',data);
		/*const dropElmtUnder = this.state.dropElmtUnder;
		const elements = this.state.elements;
		dropElmtUnder.push(elements);
		this.setState=({
			dropElmtUnder: dropElmtUnder
		});*/
		/*console.log('INSIDE drop; ev.target.id:', ev.target.id);
		const { items, completedTasks, draggedTask } = this.state;
		this.setState=({
			completedTasks: [...completedTasks, draggedTask],
			items: items.filter( item => item.key !== draggedTask.key),
			draggedTask: {},
		});*/
	}
	clearItems(){
		let items = this.state.items;
		let elements = this.state.elements;
		items.length = 0;
		elements.length = 0;
		this.setState=({
			items: items,
			elements: elements
		});
		console.log('clearITEMS; this.state.items: ',this.state.items)
		console.log('clearITEMS; this.state.elements: ',this.state.elements)
		//let items = this.state.items;
		//items = [];
		//this.state.items = [];
	}
    delete(key) {
        this.props.delete(key);
    }
    createTasks(item) {
		//this.deleteItems();
		const items = this.state.items;
		//const elements = this.state.elements;
		//const dropElmtUnder = this.state.dropElmtUnder;
		
		console.log('CREATETASKS: items.length | item.key: ',items.length,' | ',item.key);
		
		const count = items.length;
		
		for(let i=0;i<=count;i++){
			if(items[i] === undefined){
				//if(i === count){
					console.log('UNDEFINED!');
					console.log('else if: item.key: ', item.key);
					console.log('else if: i | items.length: ', i,' | ',items.length);
					items.push({key: item.key, id:'id-key:'+item.key ,text: item.text, addTo: 1});
					this.setState=({
						items: items
					});
					//completedTasks.push(item.key);
				//}
			}
			else console.log('else; i | items.length: ', i,' | ',items.length);		
		}
		//console.log(this.state.items);
		//this.deleteItems();
		return (
			<li key={item.key} ref={this.ref} id={'id-key:'+item.key} draggable onDrag={(e) => this.drag(e)} >
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
		
		//elements.push(element);
		//dropElmtUnder.push(element);
		//this.setState = ({
			//elements: elements,
			//dropElmtUnder: dropElmtUnder
		//});
    }
    render() {
		//console.log(this.props.entries.key);
		/*this.setState=({
			key: this.props.entries.key,
		});*/
		this.clearItems();
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);
		//todoEntries.forEach(this.createTasks);
		//const elements = this.state.elements;
		//const listItemsDropped = elements.map(index => {return index});
		//const dropElmtUnder = this.state.dropElmtUnder;
		//const listItemsDragged = dropElmtUnder.map(index => {return index.id});
		//console.log('listItemsDragged: ',listItemsDragged);
		//const completedTasks = this.state.completedTasks;
		//const listItemsDragged = completedTasks.map(index => {return index});
		//const draggedTask = this.state.draggedTask;
		//console.log('draggedTask',draggedTask);
		//console.log('listItemsDropped',listItemsDropped);
    
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
				<div className='div-list-done'
						//onDragOver={e => this.allowDrop(e)}
						//onDrop={e => this.drop(e)}
						>
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