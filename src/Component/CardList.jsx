import React from "react";
import './CardList.css';
import {Card} from './Card';
export const CardList=props=> {
return <div className="card-list">
    {props.monster.map(monster=> <Card key={monster.id} monster={monster}/>)}</div>}