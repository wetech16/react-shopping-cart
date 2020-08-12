import React from 'react'
import './CartItem.css'

//2nd way: function CartItem (pros)
export default function CartItem ({id, name, price, qty, updateQty}) {
    return (
        
        <div className="CartItem">
            <div>{name}</div>
            <div>${price}</div>
            <div>
            {/* //Style and make some rules for the button */}
                <button onClick={() => {updateQty(id, qty-1)}} disabled={qty<=1}>-</button>
                    {qty}
                <button onClick={() => {updateQty(id, qty+1) }} >+</button>
            </div>
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