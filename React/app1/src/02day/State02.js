import { useState } from "react"

export default function State02(){
    const[cl,setCl]=useState("red");
    return(
        <div>
            <p onClick={()=>{
                if(cl=='red')
                    setCl('blue')
                else
                    setCl("red");
                }} style={{color:cl}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, aut.
            </p>
        </div>
    )
}