import React, { Component } from "react";
import './TodoItems.css';
 
class TodoItems extends Component {
    constructor(props) {
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
	onDrag(e){
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
	}
	clearItems(){
		let elements = this.state.elements;
		elements.length = 0;
		this.setState=({
			elements: elements
		});
		console.log('clearITEMS; this.state.elements: ',this.state.elements);
	}
    delete(key) {
        this.props.delete(key);
    }
    createTasks(item) {
		const elements = this.state.elements;
		
		const element = (
			<li key={item.key} ref={this.ref} id={'id-key:'+item.key} draggable onDrag={(e) => this.onDrag(e)} >
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
		
		elements.push(element);
		
		this.setState = ({
			elements: elements
		});
    }
    render() {
		this.clearItems();
        const todoEntries = this.props.entries;
		todoEntries.forEach(this.createTasks);
		const elements = this.state.elements;
		const listItems = elements.map(index => {return index})
		const elementToDrag = this.state.elementToDrag;
		const listItemsDropped = elementToDrag;
		console.log('INSIDE render; listItemsDropped: ', listItemsDropped);
    
        return (
			<div>
				<div className='div-list'>
					<ul className="theList"
						onDragOver={e => this.onDragOver(e)}
						onDrop={e => this.onDrop(e)}
						> 
						{listItems}
					</ul>
				</div>
				<div className='div-list-done'
						//onDragOver={e => this.allowDrop(e)}
						//onDrop={e => this.drop(e)}
						>
					<ul className="theList-done"
						onDragOver={e => this.onDragOver(e)}
						onDrop={e => this.onDrop(e)}
						>
						{listItemsDropped}
					</ul>
				</div>
			</div>
        );
    }
};
 
export default TodoItems;