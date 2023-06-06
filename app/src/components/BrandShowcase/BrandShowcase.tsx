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
  return (
    <div className="brand-showcase-container">
      <h2>Navegue por marcas</h2>

      <div className="carousel">
        <button className="caret-left">
          <img src={CaretLeft} alt="caret-left" />
        </button>

        <div className="brand-container">
          {brands.map((brand, index) => {
            return (
              <a key={index} href={brand.url}>
                <img src={brand.logo} alt={brand.name} width={172} />
              </a>
            );
          })}
        </div>

        <button className="caret-right">
          <img src={CaretRight} alt="caret-right" />
        </button>
      </div>
    </div>
  );
}
