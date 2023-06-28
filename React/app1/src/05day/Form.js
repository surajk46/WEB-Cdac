import { useReducer } from "react"

export default function FormValid(){
    const initial={
        no:{value:0,hasError:true,error:"",touched:false},
        x:{value:"",hasError:true,error:"",touched:false},
        isFormValid:false
    }

    const reducer=(state,action)=>{
        switch(action.type)
        {
            case 'update':
                const {name,value,hasError, error, touched, isFormValid} = action.data;
                return { ...state, [name]: {value, hasError, error, touched}, isFormValid }
            case 'reset':
                return initial;
        }
    }
    const[emp,dispatch]=useReducer(reducer,initial);

    const handleChange=(name,value)=>{
        //a. call validation logic
        const {hasError,error}=validateData(name,value);
        //b. check form validity status
        let isFormValid=true;
        for(const key in emp)
        {
            if(emp[key].hasError===true)
            {
                isFormValid=true;
                break;
            }
        }
        //c. call dispath method
        dispatch({type:'update',data:{name,value,hasError,error,touched:true,isFormValid}})
    }

    const validateData=(name,value)=>{
        let hasError=false;
        let error=""
        switch(name){
            case 'no':
                var pat=/^[0-9]{2,4}$/;
                if(!pat.test(value))
                {
                    hasError=true;
                    error="should have 2-4 numbers"
                }
                break;
            case "x":
                var pat=/^[A-Z][a-z]{1,}$/;
                if(!pat.test(value))
                {
                    hasError=true;
                    error="first let be capital"
                }
                break;
        }
        return {hasError,error}
    }

    return(
       
        <div>
            Enter EmpNO : 
            <input type="number" name="no" id="no" value={emp.no.value}
            onChange={(e)=>{handleChange('no',e.target.value)}}/>
            <br />
            Enter Email/name: 
            <input type="text" name="x" id="x" value={emp.x.value} 
             onChange={(e)=>{handleChange('x',e.target.value)}}/>
            <br />

            <input type="submit" name="submit" id="submit" value="submit" 
            onClick={()=>submitData()}/>
            <input type="button" name="reset" id="reset" value="reset" 
            onClick={()=>{dispatch({type:'reset'})}}/>
            <p>{msg}</p>
        </div>
    )
}