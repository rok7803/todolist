import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
		this.state = {
			elementToDrag: ''
		}
		this.dragStart = this.dragStart.bind(this);
		this.dragOver = this.dragOver.bind(this);
	}
	
	dragStart (e){
		const target = e.target;
		
		e.dataTransfer.setData('card_id', target.id);
		
		setTimeout(() => {
			target.style.display = "none";
		}, 1000);
	}
	
	dragOver (e){
		e.stopPropagation();
	}
	
	render(){
		return (
			<div
				id={this.props.id}
				className={this.props.className}
				draggable="true"
				onDragStart={this.dragStart}
				onDragOver={this.dragOver}
			>
				{this.props.children}
			</div>
		);
	}
}

export default Card;