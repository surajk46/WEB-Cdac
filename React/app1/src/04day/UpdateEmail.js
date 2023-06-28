import { useReducer, useState } from "react"

export default function UpdateEmail(){
    const initial={
        no:10,
        x:""
    }

    const reducer=(state,action)=>{
        switch(action.type){
            case 'update':
                return {...state,[action.fid]:action.value};
            case 'reset':
                return initial;
        }
        
    }
    const[emp,dispatch]=useReducer(reducer,initial);
    const[msg,setMsg]=useState(".........");
    
    const submitData=(ev)=>{
        //ev.preventDefault()
        const reqOption={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                ENAME:emp.x,
                EMPNO:emp.no
            })
        }

        fetch('http://localhost:9000/email',reqOption)
        .then(resp=>resp.text())
        .then(data=>setMsg(data))
    }

    return(
        <div>
            Enter EmpNO : 
            <input type="number" name="no" id="no" value={emp.no}
            onChange={(e)=>dispatch({type:'update',fid:'no',value:e.target.value})}/>
            <br />
            Enter Email/name: 
            <input type="text" name="x" id="x" value={emp.x} 
            onChange={(e)=>dispatch({type:'update',fid:'x',value:e.target.value})}/>
            <br />

            <input type="submit" name="submit" id="submit" value="submit" 
            onClick={()=>submitData()}/>
            <input type="button" name="reset" id="reset" value="reset" 
            onClick={()=>{dispatch({type:'reset'})}}/>
            <p>{msg}</p>
        </div>
    )
}