import { useState } from 'react'
import pic from '../Untitled1.png'
export default function State04(){
    const[flag,setFlag]=useState(true);
    return(
        <div>
            <img src={pic} style={{display:(flag)?'block':'none'}}/>
            <br />
            <input type="checkbox" name="c" id="c" checked={flag} 
            onChange={(e)=>{setFlag(e.target.checked)}}/>
            {flag.toString()};
        </div>
    )
}