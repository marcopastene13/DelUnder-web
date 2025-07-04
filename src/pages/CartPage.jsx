import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              <p>{item.name} - ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Quitar</button>
            </div>
          ))}
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
