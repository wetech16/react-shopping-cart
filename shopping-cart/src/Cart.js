import React from 'react'

//2nd way: function Cart(props)
export default function Cart({items}) {

      return (
        <div>
            <h1>I AM CART</h1>
            {
                //2nd way: props.items.map()
                items.map( (item) => 
                    
                    <div> Name:{item.name} </div>
                    
                )
              
            }
        </div>
      );
    
}