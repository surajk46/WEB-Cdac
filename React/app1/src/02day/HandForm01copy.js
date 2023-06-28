import { useReducer, useState } from "react"
export default function HandForm01()
{
    const[flag,setFlag]=useState(false);
    const[id,setId]=useState("");

    const initialstate={
        uid:'522',
        pwd:'00',
        ck:false
    }

    const reducer=(state,action)=>{
        switch(action.type){
        case 'update':
            return {...state,[action.fld]:action.value};
        case 'reset':
            return initialstate;
        }
    }

    const[emp,dispatch]=useReducer(reducer,initialstate);


     
    return(
        <div>
            <form >
                <table>
                    <tbody>
                    <tr>
                        <td><label htmlFor="uid">UID : </label></td>
                            <td><input type="text" placeholder="Enter UID" id="uid" name="uid" value={emp.uid}
                            onChange={(e)=>{
                                dispatch({type:"update",fld:'uid',value:e.target.value})
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="pwd">PW : </label></td>
                        <td><input type="password" placeholder="Enter PWD" id="pwd" name="pwd" value={emp.pwd}
                        onChange={(e)=>{
                            dispatch({type:"update",fld:'pwd',value:e.target.value})
                        }}/></td>
                    </tr>
                    </tbody>
                </table>

                <input type="checkbox" name="ck" id="ck" checked={emp.ck} 
                onChange={(e)=>{dispatch({type:"update",fld:'ck',value:e.target.checked})}}/>
                <label htmlFor="ck"> I Agree</label>

                <input type="button" value="Login" id="submit" name="submit" />
                <input type="reset" value="clear" id="reset"/>
         
                <h1 style={{display:emp.ck?'block':'none'}}>Welcome`</h1>
            </form>
        </div>
    )
}