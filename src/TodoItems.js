import React, { Component } from "react";
import './TodoItems.css';
 
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
		this.forceUpdate();
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
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });

        return (
            <div className="container-drag">
                <h2 className="header">DRAG & DROP DEMO</h2>
                <div className="wip"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span className="task-header">WIP</span>
                    {tasks.wip}
                </div>
                <div className="droppable" 
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                     <span className="task-header">COMPLETED</span>
                     {tasks.complete}
                </div>


            </div>
        );
    }
}
 
export default TodoItems;