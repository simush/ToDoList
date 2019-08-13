import React, { Component } from 'react';

import './Drow.css';

export default class OverDrowButton extends Component{
    render(){
        return(
            <span>
                <button 
                    className="drowBtn"
                    onClick={this.props.overDrow}
                >
                    Drow
                </button>
            </span>
        );
    }
}