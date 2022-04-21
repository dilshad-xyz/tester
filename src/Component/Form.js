import React, { Component } from 'react'

export default class Form extends Component {
  
     login(){
      //  alert('login called');
       console.warn('State', this.state)
       fetch('https://reqres.in/api/login');
     } 

  render() {
    return (
      <div>
         <form>
        <div>
          <input type='email'
          name="email"
          onChange={(e)=>{this.setState({email:e.target.value })}}
          />
        </div>
        
        <div>
          <input type='password'
          name="password"
          onChange={(e)=>{this.setState({password:e.target.value })}}
          />
          <button onClick={this.login()}>Submit</button>
        </div>
      </form>
      </div>
    )
  }
}
