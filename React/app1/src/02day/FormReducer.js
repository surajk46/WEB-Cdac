import { useReducer } from "react"

export default function FormReducer()
{
    const initialState ={
        name:"XXXX",
        email:"xx@.com",
        bdate:"16-06-2023",
        btime:"11:34 PM",
        flag:false
    }

    const reducer=(state,action)=>
    {
        switch(action.type)
        {
            case 'update':
                return {...state,[action.fid]:action.value}
            case 'reset':
                return initialState;
        }
    }
    const [emp,dispatcher]=useReducer(reducer,initialState);

    return(
        <div>
            <form action="">
            <table>
                <tr>
                    <td colspan="2">
                        <input type="text" name="name" id="name" placeholder="Enter Your Name" list="names" value={emp.name}
                        onChange={(e)=>{
                            dispatcher({type:'update',fid:'name',value:e.target.value})
                        }}/>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input type="email" name="email" id="email" maxlength="15" placeholder="Enter Your Email" value={emp.email}
                            onChange={(e)=>{
                                dispatcher({type:'update',fid:'email',value:e.target.value});
                            }}/>
                    </td>
                </tr>
                <tr>
                    <td><label for="bdate">Birth Date</label></td>
                    <td><input type="date" name="bdate" id="bdate" value={emp.bdate}
                    onChange={(e)=>{
                        dispatcher({type:'update',fid:'bdate',value:e.target.value})
                    }}/></td>
                </tr>
                <tr>
                    <td><label for="btime">Birth Time</label></td>
                    <td><input type="time" name="btime" id="btime" value={emp.btime}
                    onChange={(e)=>{
                        dispatcher({type:'update',fid:'email',value:e.target.value});
                    }}/></td>
                </tr>
                <td><input type="submit" name="submit" id="submit"/></td>
                <td><input type="reset" name="reset" id="reset"/></td>
        </table>
        </form>
        <datalist id="names">
            <option>vaibhav</option>
            <option>bakul</option>
            <option>amit</option>
            <option>dipak</option>
            <option>vishal</option>
            <option>jivan</option>
            <option>diapli</option>
            <option>snehal</option>
        </datalist>
        </div>
    )
}