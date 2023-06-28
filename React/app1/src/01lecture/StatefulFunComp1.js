import { useState } from "react"

export default function StatefulFunComp1() {

    const[nm,setNm] = useState("Bakul");

    return (
        <div>
            <h1> Welcome {nm} </h1>
            <button onClick={()=>{setNm("Amit")}}>
                Change Name
            </button>
        </div>
    )
}