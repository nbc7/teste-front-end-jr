import { Banner } from '../../components/Banner/Banner';
import { CategoryCardList } from '../../components/CategoryCardList/CategoryCardList';
import { Header } from '../../components/Header/Header';

import './Home.scss';

export function Home() {
  return (
    <div className="container">
      <Header />

      <Banner />

      <CategoryCardList />
    </div>
  );
}
