import React from "react";
class StatefulClsComp1 extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            nm: "Bakul"
        }
    }

    render(){
        return (
        <div>
        <h1>Welcome {this.state.nm} </h1>
        <button onClick={()=> {this.setState({nm: "Amit"})}}> 
            Change Name
        </button> 
        </div> 
        )
    }
}

export default StatefulClsComp1