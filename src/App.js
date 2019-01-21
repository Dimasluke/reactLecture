import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './components/Child';
import MyButton from './components/Button';
import Login from './components/Login'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mentor: "Hujnter",
      number: 0,
      user: ''
    }
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this)
    this.login = this.login.bind(this)
  }

  add () {
    this.setState({
      number: this.state.number + 1
    })
  }

  subtract(){
    this.setState({
      number: this.state.number - 1
    })
  }

  login(user){
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div className="App">
        <h1>App.js</h1>
        <Child data="Luke" />
        <Child data="Penelope" />
        <Child data={["Buddha", "Lucy", "Ralphe" ]} />
        <Child data={5 + 5} />
        <Child data={this.state.mentor} />
        <h1>{this.state.number}</h1>
        <MyButton label="Add" action={this.add} />
        <MyButton label="Subtract" action={this.subtract} />
        <h1>{this.state.user}</h1>
        <Login login={this.login} />
      </div>
    );
  }
}

export default App;
