import React, {useState} from 'react'

const Calculator = () => {
    const [result, setResult]= useState("");


    const handleClick=(event) => {
        setResult (result.concat(event.target.name));
    }

    const clearAll=() => {
        setResult('');
    }

    const deleteItem=()=>{
        setResult(result.slice(0, result.length-1));
        // slice methode used to delete the last data of the input
    }

    const calculateResult=() => {
        try{
            setResult( eval(result).toString() );
        }catch(error){
            setResult("Error");
        }
    }
  return (
    <div>
        <div className="calculator_section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="calculator_area">
                            <div className="calculator_head">
                                <input type="text" value={result}/>
                            </div>
                                
                            <div className="calcilator_body">
                                <div>
                                    <button onClick={clearAll} className="cal_btn">C</button>
                                    <button onClick={deleteItem} className="cal_btn">x</button>
                                    <button name="%" onClick={handleClick} className="cal_btn">%</button>
                                    <button name="/" onClick={handleClick} className="cal_btn diff_bg">/</button>
                                </div>
                                <div>
                                    <button name="7" onClick={handleClick} className="cal_btn">7</button>
                                    <button name="8" onClick={handleClick} className="cal_btn">8</button>
                                    <button name="9" onClick={handleClick} className="cal_btn">9</button>
                                    <button name="*" onClick={handleClick} className="cal_btn diff_bg">*</button>
                                </div>
                                <div>
                                    <button name="4" onClick={handleClick} className="cal_btn">4</button>
                                    <button name="5" onClick={handleClick} className="cal_btn">5</button>
                                    <button name="6" onClick={handleClick} className="cal_btn">6</button>
                                    <button name="-" onClick={handleClick} className="cal_btn diff_bg">-</button>
                                </div>
                                <div>
                                    <button name="1" onClick={handleClick} className="cal_btn">1</button>
                                    <button name="2" onClick={handleClick} className="cal_btn">2</button>
                                    <button name="3" onClick={handleClick} className="cal_btn">3</button>
                                    <button name="+" onClick={handleClick} className="cal_btn diff_bg">+</button>
                                </div>
                                <div>
                                    <button name="0" onClick={handleClick} className="cal_btn">0</button>
                                    <button name="." onClick={handleClick} className="cal_btn">.</button>
                                    <button onClick={deleteItem} className="cal_btn">DEl</button>
                                    <button onClick={calculateResult} className="cal_btn org_bg">=</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator;