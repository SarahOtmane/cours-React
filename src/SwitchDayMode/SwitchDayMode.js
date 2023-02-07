import { useState } from 'react';
import PropTypes from 'prop-types';
import './SwitchDayMode.css'

const Switch = ({day}) => {

    const [light, setLight] = useState(day);

    const onActivate = (event)=>{
        (light===true) ? setLight(false) : setLight(true);
        createEnvir(light);
    }

    const createEnvir = (value)=>{
        if(value === true){
            return(
                <div className="container">
                    <div className='switch on' onClick={()=>onActivate()}></div>
                    <label>Day</label>
                </div>
            )
        }else{
            return(
                <div className="container">
                    <div className='switch' onClick={()=>onActivate()}></div>
                    <label>Night</label>
                </div>
            )
        }

        
    }

    return ( 
        <div className='SwitchDayMode'>
            {createEnvir(light)}
        </div>
    )
}
 

Switch.protoTypes ={
    day : PropTypes.bool
};

Switch.defaultProps ={
    day : false
}


export default Switch;