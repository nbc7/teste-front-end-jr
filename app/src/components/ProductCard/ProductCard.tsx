import { useState } from 'react';

import { ProductModal } from '../ProductModal/ProductModal';

import './ProductCard.scss';

export function ProductCard() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleBuy(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation();

    console.log('buy');
  }

  return (
    <>
      {isModalOpen && (
        <ProductModal
          onClose={() => setIsModalOpen(false)}
          image="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="R$ 28,90"
        />
      )}

      <article onClick={() => setIsModalOpen(true)}>
        <div className="product-container">
          <img src="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png" alt="" />

          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>

          <div className="product-price-container">
            <span className="price-old">R$ 30,90</span>

            <span className="price">R$ 28,90</span>

            <span className="price-option">ou 2x de R$ 49,95 sem juros</span>
          </div>

          <span className="shipping">Frete grátis</span>

          <button onClick={handleBuy}>comprar</button>
        </div>
      </article>
    </>
  );
}
