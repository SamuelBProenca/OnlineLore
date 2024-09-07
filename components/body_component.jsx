import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => alert(`Detalhes do produto: ${product.name}`)}>Ver Detalhes</button>
    </div>
  );
};

export default ProductCard;
