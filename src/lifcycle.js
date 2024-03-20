import React from "react";

class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={hello:'world'};

    }
    static getDerivedStateFromProps(props,state){
        return{
            hello:props.greet
        }

    }
    render(){
        return(
            <h1>Welcome,{this.state.hello}</h1>
        )
    }

}
export default MyComponent