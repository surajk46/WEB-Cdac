import React from "react";
class PropsClsComp extends React.Component{
    render(){
        return (
            <div>
                <h1> Welcome {this.props.name.toUpperCase()} </h1>
                <p> Age : {this.props.age * this.props.age} </p>
            </div>
        )
    }
}

PropsClsComp.defaultProps = {
    name: "Bakul",
    age:23
}

export default PropsClsComp;