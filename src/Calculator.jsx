import { useState } from "react"
import Keypad from "./Keypad"

function Calculator(){

    let [input,setinput]=useState("")
    function handleClick(value){
        setinput(input+value)
    }
function calculate(value){
    let output=eval(input)
    setinput(output)
}
function handleclear(){
    setinput("")
}
    return(
        <div className="container">
            <h1>Calculater APP</h1>
            <div className="calc">
                <input type="text" value={input} className="output"/>
                <Keypad handleClick={handleClick} clear={handleclear} cal={calculate}/>
            </div>
        </div>
    )
}
export default Calculator

