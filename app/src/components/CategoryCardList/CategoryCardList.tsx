import { useState } from 'react';

import TecnologiaIcon from '../../assets/icons/categories/monitorar-tablet-e-smartohone.svg';
import SupermercadoIcon from '../../assets/icons/categories/supermercados.svg';
import BebidasIcon from '../../assets/icons/categories/whiskey.svg';
import FerramentasIcon from '../../assets/icons/categories/ferramentas.svg';
import SaudeIcon from '../../assets/icons/categories/cuidados-de-saude.svg';
import EsportesIcon from '../../assets/icons/categories/corrida.svg';
import ModaIcon from '../../assets/icons/categories/moda.svg';

import { CategoryCard } from '../../components/CategoryCard/CategoryCard';

import './CategoryCardList.scss';

export function CategoryCardList() {
  const categories = [
    { image: TecnologiaIcon, title: 'Tecnologia' },
    { image: SupermercadoIcon, title: 'Supermercado' },
    { image: BebidasIcon, title: 'Bebidas' },
    { image: FerramentasIcon, title: 'Ferramentas' },
    { image: SaudeIcon, title: 'Saúde' },
    { image: EsportesIcon, title: 'Esportes e Fitness' },
    { image: ModaIcon, title: 'Moda' },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('Tecnologia');

  function handleSelect(title: string) {
    setSelectedCategory(title);
  }

  return (
    <div className="category-card-list-container">
      <ul>
        {categories.map((category, index) => {
          return (
            <li key={index}>
              <CategoryCard image={category.image} title={category.title} onSelect={handleSelect} isSelected={selectedCategory === category.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
