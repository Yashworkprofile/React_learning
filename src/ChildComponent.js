function ChildComponent(props){
    return(
        <div style={{
            textAlign:"center"
        }}><button onClick={()=>props.greetHandler()} > Notification</button></div>
    )
}
export default ChildComponent