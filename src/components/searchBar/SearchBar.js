import React, { Component } from 'react';

import './SearchBar.css';

export default class SearchBar extends Component {
    render() {
        return (
            <form 
                className="search-form"
                
            >
                <input 
                    placeholder="Add some item"
                    className="search-bar"
                    value={this.props.searchTerm}
                    onChange={this.props.onSearchChange}
                />
                <button
                    className="addButton"        
                    onClick={this.props.addItem()}
                >
                Add
                </button>
            </form>
        );
    }
}