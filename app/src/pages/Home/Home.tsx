import { useEffect, useState } from 'react';
import axios from 'axios';

import { Header } from '../../components/Header/Header';
import { Banner } from '../../components/Banner/Banner';
import { CategoryCardList } from '../../components/CategoryCardList/CategoryCardList';
import { ProductShowcase } from '../../components/ProductShowcase/ProductShowcase';
import { BrandShowcase } from '../../components/BrandShowcase/BrandShowcase';
import { BannerCard } from '../../components/BannerCard/BannerCard';
import { Footer } from '../../components/Footer/Footer';

import VtexLogo from '../../assets/logos/vtex-pink.svg';

import './Home.scss';

interface ProductProps {
  photo: string;
  productName: string;
  price: number;
  descriptionShort: string;
}

interface ProductsDataProps {
  image: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  priceOption?: string;
  shipping?: string;
}

export function Home() {
  const [productsData, setProductsData] = useState<ProductsDataProps[]>([]);

  const brandsData = [
    { name: 'Vtex', logo: VtexLogo, url: '#' },
    { name: 'Vtex', logo: VtexLogo, url: '#' },
    { name: 'Vtex', logo: VtexLogo, url: '#' },
    { name: 'Vtex', logo: VtexLogo, url: '#' },
    { name: 'Vtex', logo: VtexLogo, url: '#' },
    { name: 'Vtex', logo: VtexLogo, url: '#' },
    { name: 'Vtex', logo: VtexLogo, url: '#' },
    { name: 'Vtex', logo: VtexLogo, url: '#' },
    { name: 'Vtex', logo: VtexLogo, url: '#' },
    { name: 'Vtex', logo: VtexLogo, url: '#' },
  ];

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await axios.get('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');

        if (response.data.success) {
          const formatedData = response.data.products.map((product: ProductProps) => {
            const priceToString = (product.price / 100).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            });

            return { image: product.photo, title: product.productName, description: product.descriptionShort, price: priceToString };
          });

          setProductsData(formatedData);
        } else {
          console.error('API request failed');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductsData();
  }, []);

  return (
    <div className="container">
      <Header />

      <main>
        <Banner />

        <div className="category-card-list-wrapper">
          <CategoryCardList />
        </div>

        <div className="product-showcase-wrapper-1">
          <ProductShowcase products={productsData} showCategories />
        </div>

        <div className="banner-card-wrapper big">
          <BannerCard variant="big" />

          <BannerCard variant="big" />
        </div>

        <div className="product-showcase-wrapper-2">
          <ProductShowcase products={productsData} />
        </div>

        <div className="banner-card-wrapper">
          <BannerCard title="Produtos" />

          <BannerCard title="Produtos" />
        </div>

        <div className="brand-showcase-wrapper">
          <BrandShowcase brands={brandsData} />
        </div>

        <div className="product-showcase-wrapper-3">
          <ProductShowcase products={productsData} />
        </div>
      </main>

      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
}
