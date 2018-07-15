import React, { Component } from 'react';

import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

class App extends Component {
  state = {    
    usernames:[
    {username:"John"},
    {username:"Jane"},
    {username:"Jack"},
    ]
  }

  changeUserNameHandler = (event) =>{
    this.setState({
      usernames:[
      {username:event.target.value},
      {username:"Jane"},
      {username:"Jack"}
      ]
    })
  }
  render() {
    const inputStyle = {
          fontSize: '18px',
          color: 'green'
      }
    return (
      <div className="App">
        <header>          
          <h1 style={inputStyle}>Assignment One</h1>
        </header>
        <UserInput 
        changed={this.changeUserNameHandler} 
        startName ={this.state.usernames[0].username} />
        <UserOutput 
         username={this.state.usernames[0].username}/>
        <UserInput
        startName={this.state.usernames[1].username}/>
        <UserOutput 
        username={this.state.usernames[1].username}/>
        <UserInput 
        startName={this.state.usernames[2].username}/>
        <UserOutput 
        username={this.state.usernames[2].username}/>
      </div>
    );
  }
}

export default App;
