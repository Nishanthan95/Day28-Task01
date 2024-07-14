import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div className="cart-item">
      <div className="item-details">
        <img src={item.image} alt={item.title} />
        <div className="item-info">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>${item.price}</p>
        </div>
      </div>
      <div className="item-quantity">
        <button onClick={() => decreaseQuantity(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => increaseQuantity(item.id)}>+</button>
      </div>
      <div className="item-total">
        ${item.quantity * item.price}
      </div>
    </div>
  );
};

export default CartItem;
