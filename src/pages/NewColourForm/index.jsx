import React, { useState } from "react"
import { useNewColor } from "../../context";

export default function ColourForm() {
  const [userInput,setUserInput] = useState()
  //const [newColor,setNewColor] = useState();
  const {newColor, setNewColor} = useNewColor()
  function isValidHex(hex) {
    return /^#[0-9A-Fa-f]{6}$/i.test(hex);
  }

  const hexChecker = (hex)=>{
    if (isValidHex(hex) == true){
      document.querySelector("labelColor").textContent = "New Colour Created"
    }
    else {
      document.querySelector("labelColor").textContent = "Please Enter Valid HexCode Eg (#h12a6b)[6 characters between a and f, or between 0 and 9] "
    }
  }
  const handleChange = (e)=>{
    const Char = e.target.value;
    setUserInput(Char);
  } 
  const handleSubmit =(e)=>{
    e.preventDefault();
    //checker
    console.log(userInput)
    setNewColor([...newColor, userInput])
  }
  console.log(newColor)
  return (
    <form id = "newColorForm" onSubmit={handleSubmit}>
       <label id = "labelColor">New colour Form</label>
       <input name= "enterColour" type = "text" onChange={handleChange} ></input>
       <input type = "submit"  value = "Create New Colour"></input>
    </form>
  )}