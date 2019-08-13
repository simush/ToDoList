import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import Complete from '../Complete';
import All from '../All';
import Incomplete from '../Incomplete';
import './Routes.css'; 

class Routes extends Component {
    render() {
        return (
            <Switch className="routesData">
                <Route path="/" exact component={() => <All data={this.props.data}/>} />
                <Route path="/complete" exact component={() => <Complete data={this.props.data}/>} />
                <Route path="/incomplete" exact component={() => <Incomplete data={this.props.data}/>} />
            </Switch>
        );
    }
}
export default Routes;