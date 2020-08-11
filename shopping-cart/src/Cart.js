import React from 'react'
import CartItem from './CartItem';

//2nd way: function Cart(props)
export default function Cart({items}) {
    const grandTotal = items.reduce((accu, currentValue) => accu + currentValue.qty * currentValue.price,0);

      return (
        <div>
            <h1>I AM CART</h1>
            {
                //2nd way: props.items.map()
                items.map( (item) => 
                    
                    <CartItem 
                    key={item.id}
                    //2nd Way: cart={item}
                    {...item} />
                    //{...item} should be written 
                    //id={item.id}
                    //name={item.name}
                    //price={item.price}
                    //qty={item.qty}
                )
            }
            <h1>GrandTotal: {grandTotal}</h1>
        </div>
      );
    
}