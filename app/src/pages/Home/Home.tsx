import { Header } from '../../components/Header/Header';
import { Banner } from '../../components/Banner/Banner';
import { CategoryCardList } from '../../components/CategoryCardList/CategoryCardList';
import { ProductShowcase } from '../../components/ProductShowcase/ProductShowcase';

import './Home.scss';

export function Home() {
  return (
    <div className="container">
      <Header />

      <main>
        <Banner />

        <CategoryCardList />

        <ProductShowcase showCategories />

        <ProductShowcase />

        <ProductShowcase />
      </main>
    </div>
  );
}
