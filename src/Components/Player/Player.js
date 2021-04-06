import React, { useEffect, useState } from 'react';
import playersData from '../../Data/Data.json'
import Cart from '../Cart/Cart';
import ShowPlayer from '../ShowPlayer/ShowPlayer';
import './player.css'

const Player = () => {
    const [players, setPlayers] = useState([]);
    const [cart,setCart] = useState([])
    useEffect(() => {
        setPlayers(playersData);
    }, [])
    const handlePlayerSelect =(player)=>{
        // console.log('i am selected',player);
        const newCart = [...cart, player]
        setCart(newCart)
    }
    return (
        <div className="players-container">
            <div className="player">
                {players.map(player => <ShowPlayer player={player} handlePlayerSelect={handlePlayerSelect}></ShowPlayer>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Player;