import React, { Component } from 'react';

class All extends Component {
    render() {
        var list = this.props.data;
        if (list === "") {
            return null;
        } else {
            return (
                list.map((item, index) => {
                    if (item.complete || !item.complete) {
                        return (
                            <div
                                key={index}
                            >
                                {item.name}
                            </div>

                        )
                    } else {
                        return null;
                    }
                })
            )
        }
    }
}
export default All;