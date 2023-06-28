import React from "react";
// function PropsEmp(ps)
class PropsEmp extends React.Component

{
    render(){
    return(
        <div>
            <table border='1'>
                {
                    this.props.emp.map(v=>
                       {return(<tr key={v.sal+v.empid}>
                                    <td key={v.empid}>{v.empid}</td>
                                    <td key={v.sal}>{v.sal}</td>
                                    <td key={v.name}>{v.ename}</td>
                                </tr>
                       )}
                    )
                }
            </table>
        </div>
    )}
}

export default PropsEmp;