import React from "react";
import "./Card.css";
export const Card=props=>{
    return <div className="card-container">
<img alt="monester" src={`https://robohash.org/${props.monster.id}?set=set2%size=180*180`}></img>
        <h1>{props.monster.name}</h1>
        <h1>{props.monster.email}</h1></div>
}
