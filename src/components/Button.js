import React, { Component } from 'react';

class MyButton extends Component {

    render(){
        return (
            <div>
                <button onClick={this.props.action} >{this.props.label}</button>
            </div>
        )
    }

}

export default MyButton