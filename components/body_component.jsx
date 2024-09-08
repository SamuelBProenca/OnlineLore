import React from 'react';
import styles from '../styles/card.body.module.css'

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card_body}>
      <div className={styles.card}>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => alert(`Detalhes do produto: ${product.name}`)}>Ver Detalhes</button>
      </div>
    </div>
  );
};

export default ProductCard;
