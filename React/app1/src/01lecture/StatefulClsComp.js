import React from "react";
class StatefulClsComp extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            count:1
        }
        //this.handleClick.bind(this.handleClick)
    }

    handleClick  ()  {

        this.setState({count: this.state.count+1})
    }

    render(){
        return (
            <div>
                <p> Count : {this.state.count} </p>
                {/*<button onClick={function() { this.setState({count: this.state.count + 1})}}>
                     Increment
                </button> */}
                <button onClick={()=> { this.setState({count: this.state.count + 1})}}>
                     Increment
                </button> 
            </div>
        )
    }

}

export default StatefulClsComp