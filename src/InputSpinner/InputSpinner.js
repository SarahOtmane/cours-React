import { useState } from 'react';
import './InputSpinner.css'

const InputSpinner = () => {

    const [count, setCount] = useState(0);

    const onUpdate = (value)=>{
        setCount((prev) => prev+value);
    }

    return ( 
        <div className="stepper horizontal">
            <img onClick={ (event =>onUpdate(-1)) } src="https://alikinvv.github.io/stepper/build/img/arrow.svg" className="arrow top" alt="" />
            <div className="box">
                <div className="numbers1">{count}</div>
            </div>
            <img onClick={ (event =>onUpdate(1)) } src="https://alikinvv.github.io/stepper/build/img/arrow.svg" className="arrow bottom" alt="" />
        </div>
    );
}
 
export default InputSpinner;