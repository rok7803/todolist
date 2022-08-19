import React, { Component } from "react";
 
class TodoItems extends Component {
    constructor(props) {
        super(props);
		
		this.state = {
			
		}
        this.createTasks = this.createTasks.bind(this);
    }
	dragElement(key) {
		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		if (key = item.key) {
		/* if present, the header is where you move the DIV from:*/
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
		} else {
		/* otherwise, move the DIV from anywhere inside the DIV:*/
		elmnt.onmousedown = dragMouseDown;
		}
	}
    delete(key) {
        this.props.delete(key);
    }
    createTasks(item) {
        return (
            <li key={item.key}>
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
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
    
        return (
        <ul className="theList">
            {listItems}
        </ul>
        );
    }
};
 
export default TodoItems;