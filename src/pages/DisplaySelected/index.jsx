import React, { useState } from "react";
export default function DisplaySelection (){
  const [resp,setResp] = useState({})
  
  const generateNewHex = () =>{
    let hexArr = []
    const numbers = Math.floor(Math.random()*9)
    const hexLimitedLetters = Math.floor(Math.random()*6)
    const hexLetters = ["A","B","C","D","E","F"]
    
    while (true){
      const choice = Math.floor(Math.random()*2)
        if (choice == 1){
          hexArr.push(hexLetters[numbers])
          break;
        }
        else if (choice == 2){

          break;
        }
        else {
          console.log("Out of bounds")
        }
    }


  }
  const FetchColours = ()=>{

  }
}