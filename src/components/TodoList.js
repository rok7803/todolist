import React, { Component } from "react";
import TodoItems from "./TodoItems";
import './styles/TodoList.css'
class TodoList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
		this.addItemsToState = this.addItemsToState.bind(this);
      }
       
    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                name: this._inputElement.value,
				category: "wip",
				bgcolor: "yellow",
                key: Date.now()
            };
            
            this.setState((prevState) => {
                return { 
                items: prevState.items.concat(newItem) 
                };
            });
            
            this._inputElement.value = "";
        }
            
        //console.log(this.state.items);
                
        e.preventDefault();
    }
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });
       
        this.setState({
            items: filteredItems
        });
    }
	addItemsToState(tasks){
		console.log('addItemsToState');
			this.setState = ({
				...this.state,
				tasks
			});
	}
    render() {
        return (
        <div className="todoListMain">
            <div className="header">
            <form onSubmit={this.addItem}>
                <input ref={(a) => this._inputElement = a} placeholder="New TODO item...">
                </input>
                <button type="submit">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>
                    </svg>
                </button>
            </form>
            </div>
            <TodoItems items={this.addItemsToState} entries={this.state.items} delete={this.deleteItem} />
        </div>
        );
    }
}
 
export default TodoList;