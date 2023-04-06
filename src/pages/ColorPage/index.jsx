import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from "react";
import { useNewColor } from '../../context';

function ColorPage(color, setColor) {

  const [colors, setColors] = useState([]);
  const [userColors, setUserColors] = useState([]);
  const [newHex,setNewHex] = useState("");
  const {newColor} = useNewColor();

  useEffect(() => {
    fetchColors()
  }, [])
  
  const genHex = () =>{
    let letters = '0123456789ABCDEF';
    let color = '';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  const fetchColors = async () => {
    const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${genHex()}&mode=quad&count=4`);
    console.log(`https://www.thecolorapi.com/scheme?hex=${genHex()}&count=5`);
    const results = await response.json();
    console.log(results)
    setColors(results.colors);
  };  
 

  return (
  <>
    <div id="randomColors">
      <h1>Random Color List</h1>
      {colors.map((color) => (  
        <Link to={`/color/${color.hex.clean}`} key={color.hex.clean}>
          <div style={{ backgroundColor: color.hex.value }}>
            <p>{color.name.value}</p>
            <p>{color.hex.clean}</p>
          </div>
        </Link>
      ))}
    </div>
    <div id="userColors">
      <h1>User Color List</h1>
      {newColor.length!=0? newColor.map((color) => (
        <Link to={`/color/${color}`} key={color}>
           <div style={{ backgroundColor: `#${color}` }}>
            <p>{color}</p>
          </div>
        </Link>
      )):<p>No colors defined</p>}
      </div> 
      </>
  );

}

export default ColorPage;
