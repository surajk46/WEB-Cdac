import react,{ useState } from "react";
function StateWelcome(ps)
{
    const[greet,setGreet]=useState("welcome")
    return(
        <div>
            <h1>{greet}</h1>
            <button onClick={()=>
                {
                    if(greet==("welcome"))
                        setGreet("hello")
                    else
                        setGreet("welcome")
                }
                }>click</button>
        </div>
    )
}
export default StateWelcome;