import { useEffect, useState } from "react"

export default function UsingEffect() {

    //empty - at the time of mounting
    useEffect(()=> {console.log("mounted"); setInterval(()=>{setCurdate(new Date())} , 1000 )   }, [])

    //for every update
    useEffect(() => {console.log("updated")})

    const [cdate, setCurdate] = useState(new Date());

    return (
        <div>
            <p> Time : { cdate.getHours()+":"+cdate.getMinutes()+":"+cdate.getSeconds() } </p>
            <button onClick={()=>{ setCurdate(new Date()) }}>
                change date
            </button>
        </div>
    )
}