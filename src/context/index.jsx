import React, { useState, useContext, createContext } from "react";

const ColorContext = createContext();

export const ColorProvider = ({children})=>{
  const [newColor,setNewColor] = useState([]);

  return (
    <ColorContext.Provider value ={{newColor,setNewColor}}>
      {children}
    </ColorContext.Provider>
  )
}
export const useNewColor =()=> useContext(ColorContext);