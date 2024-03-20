import React ,{ Component } from "react";
import ChildComponent from "./ChildComponent";


class ParentComponent extends Component{
    constructor(props){
        super(props)
        this.state={ParentName:"Notification"}
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(){
        alert(`You have Pressed ${this.state.ParentName}`)
    }
    render(){
        return(
            <div> <ChildComponent greetHandler={this.greetParent}/></div>
        )
    }
}
function App(){
    return(
        <div className="App" style={{
            margin:"auto",
            marginTop:"170px"
        }}>
            <h1 style={{
                textAlign:"center"
            }}>---Notification Button----</h1>
            <ParentComponent/>
        </div>
    )
}
export default App