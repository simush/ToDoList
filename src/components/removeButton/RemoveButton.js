import React, { Component } from 'react';
import './RemoveButton.css';

export default class RemoveButton extends Component {

    render() {
        return (
            <button className="deleteBtn" onClick={this.props.onDismiss} >
                Delete
            </button>
        );
    }
}
