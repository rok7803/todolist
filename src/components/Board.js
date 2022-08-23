import React, {Component} from 'react';

class Board extends Component {
    constructor(props) {
			super(props)
			
			this.drop = this.drop.bind(this);
			this.dragOver = this.drop.bind(this);
      }
	drop (e) {
		e.preventDefault();
		const card_id = e.dataTransfer.getData('card_id');
		
		const card = document.getElementById(card_id);
		//card.style.display = 'block';
		
		e.target.appendChild(card);
	}
	dragOver (e) {
		e.preventDefault();
	}
	render(){
		return (
			<div
				id={this.props.id}
				className={this.props.className}
				onDrop={this.drop}
				onDragOver={this.dragOver}
			>
				{this.props.children}
			</div>
		);
	}
}

export default Board