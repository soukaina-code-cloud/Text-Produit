import React from "react";
import { useState } from "react";
export default function Compteur(){
    const[count,setCount] = useState(0);
    const handleplus =()=>{
        setCount(count=>count+1)
    }
    const handlemoin =()=>{
        setCount(count=>count-1)
    }
    return(<div style={{textAlign:"center",backgroundColor:"gray",padding:"10px",borderRadius:"5px",width:"300px",margin:"10px "}}>
    <span>{count}</span><br/>
    <button style={{borderRadius:"5px",backgroundColor:"pink"}} onClick={handleplus}>+</button>
    <button style={{borderRadius:"5px",backgroundColor:"pink",margin:"5px"}} onClick={handlemoin}>-</button>
    </div>)
}