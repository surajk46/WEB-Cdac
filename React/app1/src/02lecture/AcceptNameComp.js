import { useState } from "react"


export default function AcceptNameComp () {

    const [nm, setNm] = useState("XXXX");
    const [flag, setFlag] = useState(true); 

    return (
        <div>
            <h1> Welcome  {nm} </h1>
            <input type="text" name="nm" value={nm} 
             onChange={(e)=>{ setNm(e.target.value) }} />

            <br/>
            
            <input type="checkbox" name="c1" checked={flag} 
             onChange={(e)=>{ setFlag(e.target.checked) }} />
            {flag.toString()}


              
        </div>
    )
}

