import React, {Component} from 'react';

class Complete extends Component{
    render(){
        var list = this.props.data;
        return (
        list.map((item, index) => {
            if(item.complete){
                return (
                    <div
                        key={index}
                    >
                        { item.name }
                    </div>
        
                     )
            } else {
                return null;
            }
        })
        )
    }
}
export default Complete;