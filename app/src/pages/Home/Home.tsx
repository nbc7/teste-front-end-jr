import { Banner } from '../../components/Banner/Banner';
import { Header } from '../../components/Header/Header';

import './Home.scss';

export function Home() {
  return (
    <div className="container">
      <Header />

      <Banner />
    </div>
  );
}
