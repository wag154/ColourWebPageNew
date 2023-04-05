import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React from "react";

function ColorPage() {
   
  useEffect(() => {
    fetchColors()
  }, [])

  const [colors, setColors] = useState([]);

  const fetchColors = async () => {
    const response = await fetch(
      `http://color-names.herokuapp.com/v1/?list=basic`
    );
    const colorData = await response.json();
    setColors(colorData.colors)
  };
  
  return (
    <div>
        <h1>Color List</h1>
        <div>
        {colors.map((el) => (
          <p key={el.name}>
            <Link to={`/color/${el.name}`}>
            {el.name}
            </Link>
            </p>
        ))}
      </div>
      
    </div>
  );
}

export default ColorPage;
