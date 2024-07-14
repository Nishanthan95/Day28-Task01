import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartSummary = () => {
  const { totalQuantity, totalAmount } = useContext(CartContext);

  return (
    <div className="cart-summary">
        <div>
        <span>TOTAL QUANTITY:</span>
        <span>{totalQuantity}</span>
      </div>
      <div>
        <span>SUBTOTAL:</span>
        <span>${totalAmount}</span>
      </div>
      <div>
        <span>SHIPPING:</span>
        <span>FREE</span>
      </div>
      <div>
        <span>TOTAL:</span>
        <span>${totalAmount}</span>
      </div>
    </div>
  );
};

export default CartSummary;
