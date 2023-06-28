import { useEffect, useState } from "react"

export default function DummyRESTComp (){

    const [users, setUsers] = useState([]);

    useEffect( ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then( resp=> resp.json())
        .then( users=> setUsers(users) )
    } ,[]);


    return (
        <div>
            <h1> Users </h1>
            <table className="table table-bordered table-hover">
                {
                    users.map(v=> {
                        return (
                            <tr>
                                <td> {v.id} </td>
                                <td> {v.username} </td>
                                <td> {v.address.city }</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )


}