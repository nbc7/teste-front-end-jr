import { useRef, useState } from 'react';

import CaretLeft from '../../assets/icons/caret-left.svg';
import CaretRight from '../../assets/icons/caret-right.svg';

import { ProductCard } from '../ProductCard/ProductCard';

import './ProductShowcase.scss';

interface ProductShowcaseProps {
  products: {
    image: string;
    title: string;
    price: string;
    description: string;
  }[];
  showCategories?: boolean;
}

export function ProductShowcase({ products, showCategories = false }: ProductShowcaseProps) {
  const categories = ['celular', 'acessórios', 'tablets', 'notebooks', 'tvs', 'ver todos'];

  const [selectedCategory, setSelectedCategory] = useState<string>('celular');
  const carouselItems = useRef<HTMLDivElement | null>(null);

  function handleScrollLeft(event: React.MouseEvent<HTMLButtonElement>) {
    if (!carouselItems.current) return;

    const scrollWidth = carouselItems.current.scrollWidth;
    const visibleWidth = carouselItems.current.offsetWidth;

    const carouselWidth = parseInt(getComputedStyle(carouselItems.current).getPropertyValue('width'));
    const itemsGap = parseInt(getComputedStyle(carouselItems.current).getPropertyValue('gap'));

    const target = event.target as HTMLButtonElement;
    const buttonLeft = target.localName !== 'button' ? (target.parentNode as HTMLButtonElement) : target;
    const buttonRight = buttonLeft?.parentNode?.children[buttonLeft?.parentNode.children.length - 1] as HTMLButtonElement;

    carouselItems.current.scrollLeft -= carouselWidth + itemsGap;

    setTimeout(() => {
      if (!carouselItems.current) return;

      if (carouselItems.current.scrollLeft + visibleWidth < scrollWidth) buttonRight.style.visibility = 'visible';

      if (carouselItems.current.scrollLeft === 0) buttonLeft.style.visibility = 'hidden';
    }, 700);
  }

  function handleScrollRight(event: React.MouseEvent<HTMLButtonElement>) {
    if (!carouselItems.current) return;

    const scrollWidth = carouselItems.current.scrollWidth;
    const visibleWidth = carouselItems.current.offsetWidth;

    const carouselWidth = parseInt(getComputedStyle(carouselItems.current).getPropertyValue('width'));
    const itemsGap = parseInt(getComputedStyle(carouselItems.current).getPropertyValue('gap'));

    const target = event.target as HTMLButtonElement;
    const buttonRight = target.localName !== 'button' ? (target.parentNode as HTMLButtonElement) : target;
    const buttonLeft = buttonRight?.parentNode?.children[0] as HTMLButtonElement;

    carouselItems.current.scrollLeft += carouselWidth + itemsGap;

    setTimeout(() => {
      if (!carouselItems.current) return;

      if (buttonLeft.style.visibility !== 'visible') buttonLeft.style.visibility = 'visible';

      if (carouselItems.current.scrollLeft + visibleWidth >= scrollWidth) buttonRight.style.visibility = 'hidden';
    }, 700);
  }
  return (
    <div className="product-showcase-container">
      <div className="product-showcase-header">
        <div className="product-showcase-title">
          <div className="divider-half"></div>

          <h2>Produtos relacionados</h2>

          <div className="divider-half"></div>
        </div>

        {!showCategories ? (
          <a href="#">Ver todos</a>
        ) : (
          <div className="categories-container">
            <ul>
              {categories.map((category) => {
                return (
                  <li
                    key={category}
                    className={selectedCategory === category ? 'category-selected' : ''}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="carousel">
        <button className="caret-left" onClick={handleScrollLeft}>
          <img src={CaretLeft} alt="caret-left" width={20} height={34} />
        </button>

        <section ref={carouselItems}>
          {products.map((product, index) => {
            return <ProductCard key={index} image={product.image} title={product.title} price={product.price} description={product.description} />;
          })}
        </section>

        <button className="caret-right" onClick={handleScrollRight}>
          <img src={CaretRight} alt="caret-right" width={20} height={34} />
        </button>
      </div>
    </div>
  );
}
