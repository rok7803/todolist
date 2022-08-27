import React from 'reacto';



class TodoTasks extends React.Component{
	
	constructor(props){
		super(props)
		
		this.onDrag = this.onDrag.bind(this);
		this.onDragOver = this.onDragOver.bind(this);
		this.delete = this.delete.bind(this);
	}
	
	onDrag(event, item){
		event.preventDefault();
		const todos = this.state.todos;
		let draggedTask = this.state.draggedTask;
		const idKey = 'id-key:'+item.key;
		let todo = todos.filter( (index) => {
			console.log('INSIDE onDrag; index.props.id | idKey: ',index.props.id,' | ', idKey);
			return index.props.id === idKey? index:console.log('No todos');
		});
		todo = todo[0];
		console.log('INSIDE onDrag; todo: ',todo);
		//draggedTask = draggedTask.assign({},todo);
		draggedTask[0] = todo;
		//console.log('INSIDE onDrag; draggedTask: ',draggedTask);
		//draggedTask.assign({},todo);
		this.setState=({
			draggedTask: draggedTask
		});
		//console.log('INSIDE onDrag; this.state.draggedTask: ',this.state.draggedTask);
	}
	onDragOver(event){
		event.stopPropagation();
	}	
	
	delete(key) {
        this.props.delete(key);
    }
	
	render(){
		const items = this.props.entries;
		return(
		<div>
			items.map( (item) => {
				<li key={item.key} id={'id-key:'+item.key} draggable='true' onDrag={(e) => this.onDrag(e, item)} >
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
			</li>})
		</div>
		)
	}
}

export default TodoTasks;