import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Nav extends Component{
    render(){
        return(
            <nav className="nav-container">
                <div>
                    <ul className="nav-Link">
                        <li>
                            <Link className="nav-Link" to="/">All</Link>
                            <Link className="nav-Link" to="/complete">Complete</Link>
                            <Link className="nav-Link" to="/incomplete">Incomplete</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}