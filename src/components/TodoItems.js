import React, { Component } from "react";
import './styles/TodoItems.css';
 
class TodoItems extends Component {
	
	/*constructor(props){
		super(props)
		this.state = {
			tasks: []
		}
		//this.addItemsToState = this.addItemsToState.bind(this);
		//this.getItemsFromState = this.getItemsFromState.bind(this);
	}*/

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
		console.log(this.state);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }
	/**********Why is it working?********************/
    onDrop = (ev, cat) => {
		let id = ev.dataTransfer.getData("id");
		console.log(id);
		//console.log(task.name);
		let tasks = this.props.entries.filter((task) => {
			console.log(task.name);
			if (task.name === id) {
				console.log('INSIDE if');
				task.category = cat;
			}
			return task;
		});
		console.log('INSIDE onDrop:',tasks);
		//this.props.items(tasks);
		/*this.setState=({
		   ...this.state,
		   tasks
		});*/
		/***********NOT RECOMMENDET!*******************/
		this.forceUpdate();
    }
	delete(key) {
        this.props.delete(key);
    }
    render() {
        let tasks = {
            wip: [],
            complete: []
        }
		console.log('this.state:',this.state);
		console.log(this.props.entries);
				
        this.props.entries.forEach ((t) => {
            tasks[t.category].push(
			<li key={t.name}
				draggable 
				onDragStart={(e) => this.onDragStart(e, t.name)} >
				<button onClick={() => this.delete(t.key)}>
					<svg width="24" height="24" viewBox="0 0 24 24">
						<path d="M0 0h24v24H0z" fill="none"></path>
						<path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
					</svg>
				</button>
				<label>
					<input type="checkbox" /> 
					 {t.name}
				</label>
			</li>
            );
        });

        return (
            <div className="container-drag">
                <h2 className="header">DRAG & DROP DEMO</h2>
                <ul id="wip" className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">WIP</span>
                    {tasks.wip}
                </ul>
                <ul id="completed" className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                     <span className="task-header">COMPLETED</span>
                     {tasks.complete}
                </ul>


            </div>
        );
    }
}
 
export default TodoItems;