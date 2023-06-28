import { useState } from "react"

export default function DynamicStyling ()
{

    const[cl, setCl] = useState("red");
    const[flag, setFlag] = useState(true)
    return (
        <div>
            <p style={{color: cl}}>
                Paragraph chages its color
            </p>
            <input type="color" name="cl" value={cl}
             onChange={(e)=>{ setCl(e.target.value)}} />

            <p style={{ display: flag?"block":"none" }}>
                This paragrapph is hidden/shown
            </p>
            <br/>
            <input type="checkbox" name="c1" checked={flag}
            onChange={(e)=>{setFlag(e.target.checked)}} />
            Hide/Show Paragraph

        </div>
    )
}