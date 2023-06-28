import { useEffect, useState } from "react"

export default function RestAPI(){
    const[emp,setEmp]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:9000/getEmp")
        .then(res=>res.json())
        .then(emp=>setEmp(emp))
    },[]);

    

    return(
        <div>
            <table>
                <tbody>
                    {
                        emp.map(v => {return(<tr>
                                <td>{v.JOB}</td>
                                <td>{v.ENAME}</td>
                            </tr>
                        )})
                    }
                </tbody>
            </table>
        </div>
    )
}