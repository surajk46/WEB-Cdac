import { useReducer } from "react"

export default function Reducerfun()
{
    const initialState={
        x:"123",
        pwd:"123",
        flag:false
    }

const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'update':
            return {...state,[action.fid]:action.value}
        case 'reset' :
            return initialState
    }
}


const[emp,dipatcher]=useReducer(reducer,initialState);

    return(
        <div>
            <form>
            <table>
            <thead></thead>
            <tbody>
                <tr>
                    <td>Enter userID:</td>
                    <td>
                        <input type="number" id="x" name="x" value={emp.x}
                        onChange={(e)=>{dipatcher({type:'update',fid:'x',value:e.target.value})}}/>
                    </td>
                </tr>
                <tr>
                    <td>Enter password:</td>
                    <td>
                        <input type="password" id="pwd" name="pwd" value={emp.pwd}
                        onChange={(e)=>{dipatcher({type:'update',fid:'pwd',value:e.target.value})}}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <button type="button" id="flag" name ="flag" onClick={(e)=>{dipatcher({type:'update',fid:'flag',value:true})}}>login</button>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}  style={{display:emp.flag?'block':'none'}}>welcome:{emp.x}
                    </td>
                </tr>
            </tbody>
        </table>
        </form>
        {JSON.stringify(emp)}
        </div>
    )
}