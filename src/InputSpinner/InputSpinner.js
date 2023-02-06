import './InputSpinner.css'

const InputSpinner = () => {
    return ( 
        <div className="stepper horizontal">
        <img src="https://alikinvv.github.io/stepper/build/img/arrow.svg" className="arrow top" alt="" />
        <div className="box">
            <div className="numbers1">255</div>
        </div>
        <img src="https://alikinvv.github.io/stepper/build/img/arrow.svg" className="arrow bottom" alt="" />
    </div>
    );
}
 
export default InputSpinner;