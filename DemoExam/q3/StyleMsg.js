import { useState } from "react"


export default function StyledMsg(){

     const[sze,setsze]=useState("22");
     const [clr, setClr] = useState("orange");

     function changeColor(event) {
      setClr(event.target.value);
     }

     return(
        <div>
          <text style={{color:clr,fontSize:sze+"px"}}>Welcome to REACT</text>
          <br/>
          Enter color:
          <select onChange={changeColor}>
            <option value="orange">Orange</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
          </select>
          <br/>
          Enter size: <input type="number" onChange={(e)=>{ setsze(e.target.value) }}></input>
        </div>
     )
}