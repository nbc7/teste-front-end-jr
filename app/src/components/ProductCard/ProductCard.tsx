import './ProductCard.scss';

export function ProductCard() {
  return (
    <article>
      <div className="product-container">
        <img src="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png" alt="" />

        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>

        <div className="product-price-container">
          <span className="price-old">R$ 30,90</span>

          <span className="price">R$ 28,90</span>

          <span className="price-option">ou 2x de R$ 49,95 sem juros</span>
        </div>

        <span className="shipping">Frete grátis</span>

        <button>comprar</button>
      </div>
    </article>
  );
}
