import { useReducer, useState } from "react"

export default function UpdateEmp(){

    const initial={
        no:0,
        name:"",
        sal:0
    }

    const reducer=(state, action)=>{
        switch(action.type){
            case 'update':
                return {...state,[action.fid]:action.value}
            case 'reset':
                return initial;
        }
    }

    const[emp,dispatch]=useReducer(reducer,initial);
    const[msg,setMsg]=useState("......................")

    const submitData=(ev)=>{
        ev.preventDefault()

        const reqOptions={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                EMPNO:emp.no,
                ENAME:emp.name,
                SAL:emp.sal
            })
        }

        fetch('http://localhost:9000/insert',reqOptions)
        .then(resp=>resp.text())
        .then(data=>setMsg(data));
    }

    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            ENTER EMPNO :
                        </td>
                        <td>
                            <input type="number" name="no" id="no"  value={emp.no}
                            onChange={(e)=>dispatch({type:'update',fid:'no',value:e.target.value})}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            ENTER NAME :
                        </td>
                        <td>
                            <input type="text" name="name" id="name"  value={emp.name}
                            onChange={(e)=>dispatch({type:'update',fid:'name',value:e.target.value})}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Enter sal :
                        </td>
                        <td>
                            <input type="number" name="sal" id="sal"  value={emp.sal}
                            onChange={(e)=>dispatch({type:'update',fid:'sal',value:e.target.value})}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" value="Submit"
                            onClick={(e)=>{ submitData(e) }} />
                        </td>
                        <td>
                            <input type="button" value="Clear" 
                            onClick={()=>{dispatch({type:'reset'})}} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <p> {msg} </p>
        </div>
    )
}