import PropTypes from 'prop-types'
import avatarDefault from './avatar.png'
import './ProfilCard.css'


const ProfilCard = ({pro, img, name, town, job, skills}) => {
    return ( 
        <div className='card-container'>
            {(pro === true)? <span className="pro">PRO</span> : null}
	        <img className="round" src={img} alt="user" />
	        <h3>{name}</h3>
	        <h6>{town}</h6>
	        <p>{job}</p>
	        <div className="buttons">
	        	<button className="primary">
	        		Message
	        	</button>
	        	<button className="primary ghost">
	        		Following
	        	</button>
	        </div>
	        <div className="skills">
	        	<h6>Skills</h6>
	        	<ul>
	        		{skills.map(skill => <li>{skill}</li>)}
	        	</ul>
	        </div>
        </div>
    );
}

ProfilCard.propTypes ={
    pro: PropTypes.bool,
    img: PropTypes.string,
    name: PropTypes.string,
    town: PropTypes.string,
    job: PropTypes.string,
    skills: PropTypes.array
};

// ProfilCard.defaultProps ={
//     img : avatarDefault
// }
export default ProfilCard;