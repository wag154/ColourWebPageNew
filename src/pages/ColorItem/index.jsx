import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
function ColorItem() {
    let colorSubArray;
    const {name} = useParams() 
    const navigate = useNavigate()

  useEffect( () => {
     fetchColors()
  }, [])
  const [svgtemp, setsvgtemp] = useState({images: {} })
  const [color, setColor] = useState([]);
  
  const fetchColors = async () => {
    const fetchColor = await fetch(
      `https://api.color.pizza/v1/names/?name=${name}`
    )
    const colorsFetched = await fetchColor.json()
    console.log(colorsFetched.colors)
    if (colorsFetched.colors.length > 1) {
      setColor([colorsFetched.colors]);
    }else if( colorsFetched.colors.length == 1){
      setColor([colorsFetched.colors[0]]);
    }else{
      setColor({});
    }
  }
    colorSubArray = color.slice(0);
   console.log("asdas",colorSubArray[0]);
   console.log(color);
    return (
      <>
      
      <h1>{color.length > 0 ? color[0].name : 'Color not found'}</h1>
       <p>{color.swatchImg}</p>
      <button onClick={() => navigate("/color")}>Back</button>
      </>
    )  
  
  
  
}

export default ColorItem
