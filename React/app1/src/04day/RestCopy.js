import { useEffect, useState } from "react";

export default function RestCopy() {

    const [emps, setEmps] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp=>resp.json())
        .then(data=>setEmps(data))
    },[]);

    return (<div>
        <h1> Emp data </h1>
        <table className="table table-hover">
            <tbody>
                {
                    emps.map(v => {
                        return (<tr>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>)



}