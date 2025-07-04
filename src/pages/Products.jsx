import React from 'react';
import { useCart } from '../context/CartContext';

const dummyProducts = [
  { id: 1, name: 'Producto 1', price: 100 },
  { id: 2, name: 'Producto 2', price: 200 },
];

const Products = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Productos</h2>
      {dummyProducts.map((prod) => (
        <div key={prod.id}>
          <p>{prod.name} - ${prod.price}</p>
          <button onClick={() => addToCart(prod)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
