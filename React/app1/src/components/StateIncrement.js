import { useState } from "react";

function StateIncrement()
{
    const [count,setCount]=useState(1);
    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={()=>
            {
                setCount(count+1);
            }
            }>Click</button>
            <button onClick={()=>
            {
                setCount(count-1);
            }
            }>Decrement</button>
        </div>
    )
}

export default StateIncrement;