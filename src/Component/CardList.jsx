import React from "react";
import './CardList.css';
import {Card} from './Card';
export const CardList=props=> {
return <div className="card-list">
    {this.props.monster.map(<Card key={this.prop.monster.id} monster={this.props.monster}/>)}</div>}