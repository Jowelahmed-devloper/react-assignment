import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCheckDouble } from '@fortawesome/free-solid-svg-icons'
const Cart = (props) => {
    const cart = props.cart
    const totalPrice= cart.reduce((total,player)=>total+player.salary,0)

    const btnStyle ={
        width:'150px',
        height:'30px',
        backgroundColor:'orange',
        border:'1px solid gray',
        borderRadius:'5px'

    }
    return (
        <div className="cart-container">
            <h2>Order Summary</h2>
            <h4>Selected Player:{cart.length}</h4>
            <p>Price: {totalPrice}</p>
            <h4>Total Cost : {totalPrice}</h4>
            <button style={btnStyle}> <FontAwesomeIcon icon={faCheckDouble} />Confirm Booking</button>
        </div>
    );
};

export default Cart;