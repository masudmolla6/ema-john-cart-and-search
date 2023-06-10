import React from 'react';

const Cart = (props) => {
    // const cart = props.cart;
    return (
        <div>
            <h2>Order Summary</h2>
            <p>selected cart: { props.cart.length}</p>
        </div>
    );
};

export default Cart;