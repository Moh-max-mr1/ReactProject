
function Keypad({handleClick,clear,cal}){
    return(
        <div className="keypad">
            <div className="row">
                <button onClick={
                    ()=>{handleClick("7")}
                }
                className="number">7</button>
                <button onClick={
                    ()=>{handleClick("8")}
                } className="number">8</button>
                <button  onClick={
                    ()=>{
                    handleClick("9")}
                }className="number">9</button>
                <button  onClick={
                    ()=>{
                    handleClick("/")}
                }className="operator">/</button>
            </div>
             <div className="row">
                <button  onClick={
                    ()=>{
                    handleClick("4")}
                }className="number">4</button>
                <button  onClick={
                    ()=>{
                    handleClick("5")}
                }className="number">5</button>
                <button  onClick={
                    ()=>{
                    handleClick("6")}
                }className="number">6</button>
                <button  onClick={
                    ()=>{
                    handleClick("*")}
                }className="operator">*</button>
            </div>
             <div className="row">
                <button  onClick={
                    ()=>{
                    handleClick("1")}
                }className="number">1</button>
                <button  onClick={
                    ()=>{
                    handleClick("2")}
                }className="number">2</button>
                <button  onClick={
                    ()=>{
                    handleClick("3")}
                }className="number">3</button>
                <button  onClick={
                    ()=>{
                    handleClick("-")}
                }className="operator">-</button>
            </div>
            <div className="row">
                <button  onClick={
                    ()=>{
                    handleClick("0")}
                }className="number">0</button>
                <button onClick={ ()=>{clear()}} 
                className="number">C</button>
                <button onClick={ ()=>{cal()}}
                className="number">=</button>
                <button onClick={
                    ()=>{ handleClick("+")}
                }
                 className="operator">+</button>
            </div>
        </div>
    )
}
export default Keypad
