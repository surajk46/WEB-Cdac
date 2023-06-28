import { useState } from "react"
export default function HandForm01()
{
    const[flag,setFlag]=useState(false);
    const[id,setId]=useState("");
    return(
        <div>
            <form >
                <table>
                    <tbody>
                    <tr>
                        <td><label htmlFor="uid">UID : </label></td>
                            <td><input type="text" placeholder="Enter UID" id="uid" name="uid"
                            onBlur={(e)=>{
                                setId(e.target.value);
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="pwd">PW : </label></td>
                        <td><input type="password" placeholder="Enter PWD" id="pwd" name="pwd"/></td>
                    </tr>
                    </tbody>
                </table>
                <input type="button" value="Login" id="submit" name="submit" 
                onClick={()=>
                {
                    setFlag(true);
                }} />
                <input type="reset" value="clear" id="reset"/>
                <h1 style={{display:flag?'block':'none'}}>Welcome {id}</h1>
            </form>
        </div>
    )
}