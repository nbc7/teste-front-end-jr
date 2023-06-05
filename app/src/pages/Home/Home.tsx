import { useEffect, useState } from 'react';
import axios from 'axios';

import { Header } from '../../components/Header/Header';
import { Banner } from '../../components/Banner/Banner';
import { CategoryCardList } from '../../components/CategoryCardList/CategoryCardList';
import { ProductShowcase } from '../../components/ProductShowcase/ProductShowcase';
import { BrandShowcase } from '../../components/BrandShowcase/BrandShowcase';

import './Home.scss';
import { BannerCard } from '../../components/BannerCard/BannerCard';

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
        }
      } catch (error) {
        throw error;
      }
    };

    fetchProductsData();
  }, []);

  return (
    <div className="container">
      <Header />

      <main>
        <Banner />

        <CategoryCardList />

        <ProductShowcase products={productsData} showCategories />

        <div className="banner-card-wrapper">
          <BannerCard variant="big" />

          <BannerCard variant="big" />
        </div>

        <ProductShowcase products={productsData} />

        <div className="banner-card-wrapper">
          <BannerCard />

          <BannerCard />
        </div>

        <BrandShowcase />

        <ProductShowcase products={productsData} />
      </main>
    </div>
  );
}
