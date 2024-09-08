import React from 'react';
import Product from '../components/assets/assets_item';
import ProductCard from '../components/body_component';
import { HeaderRendering } from '../components/header_component';

const products = [
    new Product(1, 'Produto 1', 'R$ 100,00', '/images/produto1.jpg', 'Descrição do Produto 1'),
    new Product(2, 'Produto 2', 'R$ 200,00', '/images/produto2.jpg', 'Descrição do Produto 2'),
];

const HomePage = () => {
  return (<>
    <HeaderRendering />
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
  </>
  );
};

export default HomePage;