import React from "react";
function fact(n){
    var fact=1;
    for(let i=1;i<=n;i++)
    {
        fact=fact*i;
    }
    return fact;
}


function PropFact(ps){
    return(
        <div>
            <h1>Fact of {ps.num}={fact(ps.num)}</h1>
        </div>
    )
}

export default PropFact