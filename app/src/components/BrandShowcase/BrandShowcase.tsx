import { useRef } from 'react';

import CaretLeft from '../../assets/icons/caret-left.svg';
import CaretRight from '../../assets/icons/caret-right.svg';

import './BrandShowcase.scss';

interface BrandShowcaseProps {
  brands: {
    name: string;
    logo: string;
    url: string;
  }[];
}

export function BrandShowcase({ brands }: BrandShowcaseProps) {
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
    <div className="brand-showcase-container">
      <h2>Navegue por marcas</h2>

      <div className="carousel">
        <button className="caret-left" onClick={handleScrollLeft}>
          <img src={CaretLeft} alt="caret-left" />
        </button>

        <div className="brand-container" ref={carouselItems}>
          {brands.map((brand, index) => {
            return (
              <a key={index} href={brand.url}>
                <img src={brand.logo} alt={brand.name} width={172} />
              </a>
            );
          })}
        </div>

        <button className="caret-right" onClick={handleScrollRight}>
          <img src={CaretRight} alt="caret-right" />
        </button>
      </div>
    </div>
  );
}
