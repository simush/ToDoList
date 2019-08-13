import React, { Component, Fragment } from 'react';

import './ToDoList.css';
import SearchBar from '../components/searchBar/SearchBar';
import TodoTitle from '../components/TodoTitle';
import Nav from './Nav';
import ToDoListItem from '../components/toDoListItem/ToDoListItem';
import RemoveButton from '../components/removeButton/RemoveButton';
import Routes from '../components/routes/Route';
import OverDrowButton from '../components/OverDrowButton/OverDrowButton';
import FilterItem from '../components/filterItem/filterItem'

import "./ToDoList.css";



let getId = 1;
class TodoList extends Component {
    state = {
        list: [],
        searchTerm: '',
        itemsToShow : []
    };


    onSearchChange = (e) => {
        console.log(this.state.searchTerm);
        return this.setState({ searchTerm: e.target.value })
    }

    onDismiss = (id) => {
        const updatedList = this.state.list.filter((item, index) => {
            console.log(index)
            if (index !== id) {
                return item;
            }
        });
        console.log(updatedList);
        return this.setState({ list: updatedList })
    };

    addItem = e => {
        e.preventDefault();
        if (this.state.searchTerm !== '') {
            const newItem = {
                name: this.state.searchTerm,
                complete: false,
                id: getId++
            };

            const newArray = [
                newItem,
                ...this.state.list
            ];

            this.setState({ searchTerm: '' })
            // console.log(newArray)
            return this.setState({ list: newArray })
        } else {
            alert("wsdfas");
        }
    };

    overDrow = (id) => {

        let newArray = this.state.list.map(item => {
            if (id === item.id) {
                return {...item, complete: !item.complete}
            } else {
                return item;
            }
        });
        this.setState({ list : newArray })
        console.log(this.state)
    }

    render() {
        // let list = [];

        // if(this.state.toShow === "All"){
        //     list = this.state.list;
        // } else if(this.state.toShow === "Complete") {
        //     list = this.state.list.filter(item => !item.complete)
        // } else if(this.state.toShow === "Incomplete"){
        //     list = this.state.list.filter(item => item.complete)
        // }  
        return (
            <>
                <div className="header">
                    <div className="header-container">
                        <TodoTitle />
                        <Nav />
                        <SearchBar
                            onSearchChange={this.onSearchChange}
                            addItem={() => this.addItem}
                            searchTerm={this.state.searchTerm}
                        />
                    </div>
                </div>
                <div className="todo-body">
                    <div className="left-side">
                    <FilterItem />
                    {
                        this.state.list.map((item, index) =>
                            <div key={index}>
                                <span>
                                    <OverDrowButton
                                        overDrow={() => this.overDrow(item.id)}
                                    />
                                    <RemoveButton
                                        onDismiss={() => this.onDismiss(index)}
                                    />
                                </span>
                                <ToDoListItem
                                    item={item}
                                
                                />
                            </div>
                        )
                    }
                    </div>
                    <div className="right-side">
                        <Routes className="dataRoutes" data={this.state.list}/>
                    </div>
                </div>
            </>
        );
    };
};

export default TodoList;