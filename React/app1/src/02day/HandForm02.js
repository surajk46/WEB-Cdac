import { useReducer , useState } from "react";
export default function HandForm02()
{
    const initialstate={
        email:"nothing",
        gender:"",
        pwd:"00",
        city:"0",
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
    const[emp, dispatch] = useReducer(reducer , initialstate );

    return(
        <div>
            <form action="">
            <label htmlFor="email">Enter Email : </label>
            <input type="email" name="email" id="email" value={emp.email}
              onChange={(e)=>{dispatch({type:"update",fld:'email',value:e.target.value})}} />
            <br />

            <label htmlFor="pwd">Enter Password : </label>
            <input type="password" name="pwd" id="pwd"
             onChange={(e)=>{dispatch({type:"update",fld:'pwd',value:e.target.value})}} />
            <br />

            <label htmlFor="gender">Select Gender : </label>
            <input type="radio" name="g" id="g" value="m"  
             onChange={(e)=>{dispatch({type:"update",fld:'gender',value:e.target.value})}}/>M
            <input type="radio" name="g" id="g" value="f"
             onChange={(e)=>{dispatch({type:"update",fld:'gender',value:e.target.value})}}/>F
            <br />

            <label htmlFor="city">Select city : </label>
            <input type="text" name="city" id="city" 
             onChange={(e)=>{dispatch({type:"update",fld:'city',value:e.target.value})}}/>
            <br />

            <input type="checkbox" name="ck" id="ck" checked={emp.ck}
            onChange={(e)=>{dispatch({type:"update",fld:'ck',value:e.target.checked})}}/>
            <label htmlFor="ck"> I Agree</label>
            <br />

            <input type="button" name="sumbit" id="submit" value="submit" />
            <input type="button" name="reset" id="reset" value="reset" />
            <span style={{display:(emp.ck)?'block':'none'}}> Welcome {JSON.stringify(emp)}</span>
            </form>
        </div>
    )
}