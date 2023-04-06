import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
function ColorItem() {
    const {hex} = useParams() 
    const navigate = useNavigate()
    const newHash = `#${hex}`
  useEffect( () => {
    setColorToPage()
  }, [])
  const setColorToPage = () => {
    //document.body.style.backgroundColor = '#${hex}';

    const containerColour = document.querySelector("colourContainer")
  }
  console.log(newHash)
    return (
      <>
      <div id="pageContent">
        <h1>Color Item</h1>
        <h2>Hex: {hex}</h2>
        <h2>Here's your beautiful colour!</h2>
        <div style={{backgroundColor:newHash}}id = "colourContainer"></div>
      <button onClick={() => navigate("/color")}>Back</button>
      </div>
      </>
    )  
}

export default ColorItem
