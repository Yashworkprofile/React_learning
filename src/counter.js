import React from "react";
class Counter extends React.Component{

    constructor(props){
        super(props)
        this.state={
            click:0
        }
    }
    increment = () => {
        this.setState((prevState) => ({
            click: prevState.click + 1,
        }));
    }
    decreament=()=>{
        if(this.state.click===0){
            this.setState((prevState) => ({
                click: prevState.click + 1,
            }));
        }
        this.setState((prevState)=>({
            click:prevState.click-1
        }))
    }



    render(){
        return(
            <div style={{
                margin:"auto",
                marginTop:"17%",
                textAlign:"center"
                
            }}>
            <h1>The current count is :{" "}{this.state.click}</h1>
            <button onClick={this.increment} style={{
                width:"100px",
                height:"30px",
                
            }}>+</button>
            <button onClick={this.decreament} style={{
                width:"100px",
                height:"30px",
                
            }}>-</button>


            </div>
        )
    }
}
export default Counter