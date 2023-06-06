import { ShieldCheck, Truck, CreditCard, Heart, UserCircle, ShoppingCart, MagnifyingGlass, CrownSimple } from '@phosphor-icons/react';

import Logo from '../../assets/logos/vtex-pink.svg';
import { ReactComponent as Box } from '../../assets/icons/box.svg';

import './Header.scss';

export function Header() {
  return (
    <header className="header-container">
      <div className="header-top">
        <div className="text-wrapper">
          <ShieldCheck size={20} weight="bold" />

          <span>
            Compra <span className="highlight">100% segura</span>
          </span>
        </div>

        <div className="text-wrapper">
          <Truck size={20} weight="bold" />

          <span>
            <span className="highlight">Frete grátis</span> acima de R$ 200
          </span>
        </div>

        <div className="text-wrapper">
          <CreditCard size={20} weight="bold" />

          <span>
            <span className="highlight">Parcele</span> suas compras
          </span>
        </div>
      </div>

      <div className="divider"></div>

      <div className="header">
        <a href="/">
          <img src={Logo} alt="logo" width={139} />
        </a>

        <form>
          <input type="text" placeholder="O que você está buscando?" />

          <button>
            <MagnifyingGlass size={28} aria-label="Buscar" />
          </button>
        </form>

        <nav>
          <a href="#">
            <Box width={28} height={28} aria-label="Pedidos" />
          </a>

          <a href="#">
            <Heart size={32} aria-label="Lista de desejos" />
          </a>

          <a href="#">
            <UserCircle size={32} aria-label="Conta" />
          </a>

          <a href="#">
            <ShoppingCart size={32} aria-label="Carrinho de compras" />
          </a>
        </nav>
      </div>

      <div className="divider"></div>

      <main className="department-menu">
        <ul>
          <li>
            <a href="#">Todas Categorias</a>
          </li>

          <li>
            <a href="#">Supermercado</a>
          </li>

          <li>
            <a href="#">Livros</a>
          </li>

          <li>
            <a href="#">Moda</a>
          </li>

          <li>
            <a href="#">Lançamentos</a>
          </li>

          <li className="highlight">
            <a href="#">Ofertas do Dia</a>
          </li>

          <li>
            <a href="#">
              <CrownSimple size={20} weight="bold" />
              Assinatura
            </a>
          </li>
        </ul>
      </main>
    </header>
  );
}
