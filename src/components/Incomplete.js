import React, { Component } from 'react';

export default class Incomplete extends Component {
    render() {
        var list = this.props.data;
        console.log(list, "++++++")
        return (
        list.map((item, index) => {
            if(!item.complete){
                return (
                    <div
                        key={index}
                    >
                        { item.name }
                    </div>
        
                     )
            }else{
                return null;
            }
        })
        )
        
    }
}