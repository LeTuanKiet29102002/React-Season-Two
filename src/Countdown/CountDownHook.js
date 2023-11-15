import { useEffect, useState } from "react";
import './CountDownHook.scss'

const CountDownHook =()=>{
    const [count , setCount]=useState(10);
    const ontimesup = ()=>{
        alert('Time sup');
    }
    useEffect(()=>{
        if(count===0){
            ontimesup();
            return ;
        }
        let timer = setInterval(()=>{
            
            setCount(count-1);
        },1000);
        return ()=>{
            clearInterval(timer)
        }
    },[count])

    return  (
        <div className="countdownhook-container">{count}</div>
    )
}

export default CountDownHook