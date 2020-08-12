import React from 'react'

//2nd way: function CartItem (pros)
export default function CartItem ({id, name, price, qty}) {
    return (
        <div>
            <div>{name}</div>
            <div>${price}</div>
            <div>{qty}</div>
            <div>Total:{qty * price}</div>
        </div>
        //Second Way
        // <div>
        //     <div>{pros.cart.name}</div>
        //     <div>${pros.cart.price}</div>
        //     <div>{pros.cart.qty}</div>
        //     <div>Total:{pros.cart.qty * pros.cart.price}</div>
        // </div>
    )
}