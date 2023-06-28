import { useState } from "react"

export default function StatefulFunComp() {
    
    const [count,setCount] = useState(1);
    return (
        <div>
            <p> Count : {count} </p>
            <button onClick={()=>{setCount(count+1)}}>
                 Increment
            </button>
        </div>
    )

}
