import React from 'react';



class TodoTasks extends React.Component{
	
	constructor(props){
		super(props)
		
		this.header = React.createRef();
		
		this.onDrag = this.onDrag.bind(this);
		this.onDragOver = this.onDragOver.bind(this);
		this.delete = this.delete.bind(this);
		this.createTasks = this.createTasks.bind(this);
	}
	
	onDrag(event, item){
		//event.preventDefault();
		const dataTransfer = new DataTransfer();
		const target = event.target;
		console.log(target.id);
		//const targetId = event.target.id;
		dataTransfer.setData('item-id', target.id);
		console.log(dataTransfer.setData('item-id', target.id));
		
	}
	onDragOver(event){
		event.stopPropagation();
	}	
	
	delete(key) {
        this.props.delete(key);
    }
	createTasks(item) {
		return(
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
    }
	render(){
		const todoEntries = this.props.entries;
		const listItems = todoEntries.map(this.createTasks);
		
		console.log(todoEntries);
		console.log(listItems);
		if(todoEntries.length > 0){
			console.log(listItems[0].props.id);
			console.log(listItems[0].props.children[0]);
			return(listItems);
		}
		else return null;
	}
}

export default TodoTasks;