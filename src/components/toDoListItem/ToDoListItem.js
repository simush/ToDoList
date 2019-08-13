import React, { Component } from 'react';

import '../OverDrowButton/Drow.css';
import './ToDoListItem.css';

export default class ToDoListItem extends Component {

    render() {
        let overStyleDrow = ' overDrow';
        let toDoListItem = "toDoListItem";
        if(this.props.item.complete){
            console.log(this.props.item.complete)
            toDoListItem += overStyleDrow
        }
        return (
            <span className={toDoListItem}>
                {this.props.item.name}
            </span>
        )
    }
}