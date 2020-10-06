import React, { Component } from 'react';
import './App.css';
import { CardList } from './Component/CardList';
export class App extends Component 
{ 
  constructor(){
    super()
    this.state={
      monster:[],
      searchField:""
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
               <input type="search" placeholder="Search" onChange={e=>this.setState({searchField:e.target.value})}/>
 
          <CardList monster={this.state.monster}/>
         </div>   
               );
      }
}
export default App;
