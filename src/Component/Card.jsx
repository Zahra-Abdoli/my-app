import React from "react";
import "./Card.css";
export const Card=props=>{
    return <div className="card-container">
<image alt="monester" src={`https://robohash.org/${this.props.id}?set=set2%size=180*180`}></image>
        {this.props.monster.map(monster=>(<h1>{monster.name}</h1>))}</div>
}