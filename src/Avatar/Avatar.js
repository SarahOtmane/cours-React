import PropTypes from 'prop-types'
import styles from './Avatar.module.css'
import avatarDefault from './avatar.png'
// sfc

const Avatar = ({imgAvatar, badgeColor}) => {
    const dimensionCss ={
        height: '120px',
        width: '120px'
    };

    const maskid = 'circle_'+imgAvatar+badgeColor;
    // const img = (imgAvatar) ? imgAvatar : avatarDefault;

    return( 
        <div className={styles.avatar}>
            <svg role="none" style={dimensionCss}>
                <mask id={maskid}>
                    <circle cx="60" cy="60" fill="white" r="60"></circle>
                    {(badgeColor)  && <circle cx="102" cy="102" fill="black" r="15"></circle>}
                </mask>
                <g mask={`url(#${maskid})`}>
                    <image
                      x="0"
                      y="0"
                      height="100%"
                      preserveAspectRatio="xMidYMid slice"
                      width="100%"
                      xlinkHref={imgAvatar}
                      style={dimensionCss}
                    />
                    <circle className={styles.border} cx="60" cy="60" r="60"></circle>
                </g>
            </svg>
            <div className={styles.badge} style={{backgroundColor: badgeColor}}></div>
        </div>
    );
};
 
Avatar.protoTypes ={
    imgAvatar : PropTypes.string,
    badgeColor : PropTypes.string
};

Avatar.defaultProps ={
    imgAvatar : avatarDefault
}

export default Avatar;