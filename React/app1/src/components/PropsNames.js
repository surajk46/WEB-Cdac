import React from "react";

function PropsNames(ps)
{
    return(
        <div>
            <ul>
                {
                   ps.names.map(v=>
                   {return <li key={v}> {v}  </li>}
                   )
                }
            </ul>
        </div>
    )
}

export default PropsNames;