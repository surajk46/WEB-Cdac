import { useReducer } from "react"

export default function HandForm02copy()
{
    const initialState={
        uid:"00",
        pwd:'0',
        flag:false
    }

    const reducer=(state,action)=>{
        switch(action.type)
        {
            case 'update':
                return {...state,[action.fid]:action.value}
            case 'reset':
                return {initialState}
        }
    }

    const[emp,dispatch]=useReducer(reducer,initialState);

    return(
        <div>
            <label htmlFor="uid">Uid : </label>
            <input type="text" name="uid" id="uid" value={emp.uid}
            onChange={(e)=>{dispatch({type:'update',fid:'uid',value:e.target.value})}}/>
            <br />

            <label htmlFor="pwd">Password : </label>
            <input type="password" name="pwd" id="pwd" value={emp.pwd}
            onChange={(e)=>{dispatch({type:'update',fid:'pwd',value:e.target.value})}}/>

            <button onClick={(e)=>{dispatch({type:'update',fid:'flag',value:emp.flag?false:true})}}>Click</button>
            <span style={{display:emp.flag?'block':'none'}}>Welcome {emp.uid} {emp.pwd}</span>
        </div>
    )
}