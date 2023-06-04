import { useState } from 'react';

import { ProductModal } from '../ProductModal/ProductModal';

import './ProductCard.scss';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  priceOption?: string;
  shipping?: string;
}

export function ProductCard({
  image,
  title,
  price,
  description,
  oldPrice = 'R$ 30,90',
  priceOption = 'ou 2x de R$ 49,95 sem juros',
  shipping = 'Frete grátis',
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleBuy(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation();

    console.log('buy');
  }

  return (
    <>
      {isModalOpen && <ProductModal onClose={() => setIsModalOpen(false)} image={image} title={title} description={description} price={price} />}

      <article onClick={() => setIsModalOpen(true)}>
        <div className="product-container">
          <img src={image} alt={title} />

          <h3>{title}</h3>

          <div className="product-price-container">
            <span className="price-old">{oldPrice}</span>

            <span className="price">{price}</span>

            <span className="price-option">{priceOption}</span>
          </div>

          <span className="shipping">{shipping}</span>

          <button onClick={handleBuy}>comprar</button>
        </div>
      </article>
    </>
  );
}
