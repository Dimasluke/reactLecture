import React, { Component } from 'react';

class Login extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: "Luke"        
        }
    }

    render(){
        return (
            <div>
                <button onClick={e => this.props.login(this.state.user)} >
                    Login
                </button>
            </div>
        )
    }
}

export default Login