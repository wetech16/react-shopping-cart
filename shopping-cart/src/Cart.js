import React, { useState } from 'react'
import CartItem from './CartItem';

//2nd way: function Cart(props)
export default function Cart({items}) {
    const [carts, setCart] = useState(items)

    const updateQty =(id, newQty) => {
        const newItem = carts.map(item => {
            if(item.id === id){
                return {...item, qty:newQty}
            } else {
                return item
            }
        }
        )
        setCart(newItem)
    }
    const grandTotal = carts.reduce(
        (total,cart) => (total + cart.qty * cart.price),0
        ).toFixed(2)

      return (
        <div>
            <h1>I AM CART</h1>
            {
                //2nd way: props.items.map()
                carts.map( (item) =>     
                    <CartItem 
                    key={item.id}
                    //2nd Way: cart={item}
                    {...item} 
                    updateQty={updateQty}
                    />
                    //{...item} should be written 
                    //id={item.id}
                    //name={item.name}
                    //price={item.price}
                    //qty={item.qty}
                    
                )
            }
            <h2>grandTotal{grandTotal}</h2>
        </div>
      );
    
}