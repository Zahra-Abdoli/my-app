import React, { Component } from 'react';
import './App.css';
import { CardList } from './Component/CardList';
 import { SearchBox } from './Component/SearchBox';

export class App extends Component 
{ 
  constructor()
  {
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
      
       const{monster,searchField}=this.state;
       const filteredMonster=monster.filter(monster=> monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return ( 
             <div className = "App" >
               <h1>search for monster</h1>
               <SearchBox palceholder={"Search monster"} handleClick={e=>this.setState({searchField:e.target.value})}/> 
 
          <CardList monster={filteredMonster}/>
         </div>   
               );
      }
}
export default App;
