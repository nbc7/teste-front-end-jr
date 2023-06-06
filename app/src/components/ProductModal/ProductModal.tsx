import { X } from '@phosphor-icons/react';

import './ProductModal.scss';

interface ProductModalProps {
  onClose: () => void;
  image: string;
  title: string;
  price: string;
  description: string;
}

export function ProductModal({ onClose, image, title, price, description }: ProductModalProps) {
  function handleClose() {
    onClose();
  }

  return (
    <div className="product-modal-container" onClick={handleClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={handleClose}>
          <X size={20} weight="bold" />
        </button>

        <div className="product-container">
          <img src={image} alt={title} />

          <div className="product-info">
            <h3>{title}</h3>

            <span className="price">{price}</span>

            <p>{description}</p>

            <a href="#">Veja mais detalhes do produto &gt;</a>
          </div>
        </div>
      </div>
    </div>
  );
}
