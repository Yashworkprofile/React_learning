import { useState } from "react"

const PropExample=(props)=>{
    return (
        <h1>{props.data}</h1>
    )
}

const Example=()=>{
    const [change,setChange]=useState(true)
    return (
        <div style={{
            margin:"auto",
            marginTop: "100px",
            textAlign:"center"
        }}>
        <button onClick={()=>setChange(!change)
        }>Click Me!</button>
        {
            change ? (<PropExample data="Hello"/>) : (<PropExample data="How are you"/>)
        }
        </div>
    )
}
export default Example