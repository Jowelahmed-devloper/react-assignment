import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './ShowPlayer.css';

const ShowPlayer = (props) => {
    const { name, salary, img } = props.player;
    const selectBtn ={
        padding:' 5px 15px',
        backgroundColor:'orange',
        border:'1px solid gray',
        borderRadius:'5px'
    }
    return (
        <div className='player-container'>
            <div className='img-container'>
                <img src={img} alt="image" />

            </div>
            <div className="player-details">
                <h1>Player Name: <span className="name-highlight">{name}</span></h1>
                <p>Price: {salary}</p>
                <button onClick={()=>props.handlePlayerSelect(props.player)} style={selectBtn}><FontAwesomeIcon icon={faCheckCircle} />Select</button>
            </div>
        </div>
    );
};

export default ShowPlayer;