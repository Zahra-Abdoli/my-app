import React from "react";
import "./SearchBox.css"
export const SearchBox=({placeholder,handleClick})=>{
    return <input className="search" type="search" placeholder={placeholder} onChange={handleClick}/>}