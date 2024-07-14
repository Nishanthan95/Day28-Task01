import React from 'react';
import { CartProvider, CartContext } from './context/CartContext';
import CartItem from './components/CartItem';
import CartSummary from './components/CartSummary';

const App = () => {
  return (
    <CartProvider>
      <div className="cart">
        <h1>Your Shopping Cart</h1>
        <div className="cart-items">
          <CartContext.Consumer>
            {({ cart }) => (
              cart.map(item => <CartItem key={item.id} item={item} />)
            )}
          </CartContext.Consumer>
        </div>
        <CartSummary />
      </div>
    </CartProvider>
  );
};

export default App;
