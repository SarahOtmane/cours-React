import { useState } from 'react';
import PropTypes from 'prop-types'
import './Rating.css'


const Rating = ({rank}) => {

    const [note, setNote] = useState(rank);

    const onActivate = (value)=>{
        setNote(value);
        createRate(value)
    }

    const createRate = (value)=>{
        let rest = 5 - value;
        let tab = [];

        for(let i=0; i<value; i++){
            tab.push(<span onClick={()=>onActivate(i+1)}>&#9733;</span>)
        }

        for(let j=0; j<rest; j++){
            tab.push(<span onClick={()=>onActivate(value+j+1)}>&#9734;</span>)
        }

        return tab;
    }

    return ( 
        <div className='row'>
            <p>La note est {note} </p>
            {createRate(note)}
        </div>
    );
}

Rating.protoTypes ={
    rank : PropTypes.number
};

Rating.defaultProps ={
    rank : 0
}
 
export default Rating;










// import { useState } from "react";
// const Rating = ({rank}) => {

//   const [note, setNote] = useState(rank);

//   const onUpdateNote = (newNote)=>{
//     setNote(newNote);
//   }

//   const ratingStyle = {
//     fontSize : "30px",
//     color: "orange",
//     cursor: "pointer"
//   }

//   const stars=[];

//   for(let j=0; j<5; j++){

//     let star = (j<note) ? <span>&#9733;</span> : <span>&#9734;</span>;
//     stars.push(<a key={j} onClick={()=>onUpdateNote(j+1)}>{star}</a>);
//   }

//   return ( <div style={ratingStyle}>{stars}</div> );
// }
 
// export default Rating;