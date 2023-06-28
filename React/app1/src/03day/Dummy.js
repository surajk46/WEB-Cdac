import { useEffect, useState } from "react"

export default function Dummy(){

    const[emps,setEmps]=useState([])

    useEffect(()=>{
        fetch("http://localhost:9000/getemp")
        .then(resp=>resp.JSON())
        .then(emps=>setEmps(emps))
    })

    return(
        <div>
            <table>
                {/* <tr>
                    <td>{emps.SAL}</td>
                </tr> */}
                {
                    emps.map((v)=>{return(
                        <tr>
                            <td>{v.JOB}</td>
                            <td>{v.ENAME}</td>
                        </tr>
                    )})
                }
            </table>
        </div>
    )
}