import React, { Component } from 'react';
import './App.css';
import { CardList } from './Component/CardList';
export class App extends Component 
{ 
  constructor(){
    super()
    this.state={
      monster:[]
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(respons=>respons.json())
    .then(user=>this.setState({monster:user}));
  }
    render()
     {
        return ( 
      
        <div className = "App" >
          <CardList monster={this.state.monster}/>
         </div>   
               );
      }
}
export default App;
