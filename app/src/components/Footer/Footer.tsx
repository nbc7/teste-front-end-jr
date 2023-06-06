import { InstagramLogo, YoutubeLogo } from '@phosphor-icons/react';

import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import EconverseLogo from '../../assets/logos/econverse.svg';
import VtexLogo from '../../assets/logos/vtex-white.svg';
import VisaImg from '../../assets/logos/payment/visa.svg';
import EloImg from '../../assets/logos/payment/elo.svg';
import AleloImg from '../../assets/logos/payment/alelo.svg';
import DinnersImg from '../../assets/logos/payment/dinners.svg';
import IfoodImg from '../../assets/logos/payment/ifood.svg';
import MastercardImg from '../../assets/logos/payment/mastercard.svg';
import PixImg from '../../assets/logos/payment/pix.svg';
import AmexImg from '../../assets/logos/payment/amex.svg';
import TicketImg from '../../assets/logos/payment/ticket.svg';
import SodexoImg from '../../assets/logos/payment/sodexo.svg';

import './Footer.scss';

export function Footer() {
  const aboutLinks = [
    { title: 'conheça', url: '#' },
    { title: 'como comprar', url: '#' },
    { title: 'indicação e desconto', url: '#' },
  ];
  const infoLinks = [
    { title: 'fale conosco', url: '#' },
    { title: 'dúvidas', url: '#' },
    { title: 'prazos de entrega', url: '#' },
    { title: 'formas de pagamento', url: '#' },
    { title: 'políticas de privacidade', url: '#' },
    { title: 'trocas e devoluções', url: '#' },
  ];
  const paymentLogos = [
    { title: 'visa', image: VisaImg },
    { title: 'elo', image: EloImg },
    { title: 'alelo', image: AleloImg },
    { title: 'dinners', image: DinnersImg },
    { title: 'ifood', image: IfoodImg },
    { title: 'mastercard', image: MastercardImg },
    { title: 'pix', image: PixImg },
    { title: 'amex', image: AmexImg },
    { title: 'ticket', image: TicketImg },
    { title: 'sodexo', image: SodexoImg },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="content-wrapper">
          <div className="vertical-columns">
            <div className="about">
              <div>
                <h2>Sobre nós</h2>

                <ul>
                  {aboutLinks.map((link) => {
                    return (
                      <li key={link.title}>
                        <a href={link.url}>{link.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="socials">
                <a href="#">
                  <FacebookIcon width={22} height={22} aria-label="Facebook" />
                </a>

                <a href="#">
                  <InstagramLogo size={22} aria-label="Instagram" />
                </a>

                <a href="#">
                  <YoutubeLogo size={22} weight="fill" aria-label="Youtube" />
                </a>
              </div>
            </div>

            <div className="info">
              <h2>Informações úteis</h2>

              <ul>
                {infoLinks.map((link) => {
                  return (
                    <li key={link.title}>
                      <a href={link.url}>{link.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="payment">
              <h2>Formas de pagamento</h2>

              <ul>
                {paymentLogos.map((logo) => {
                  return (
                    <li key={logo.title}>
                      <img src={logo.image} alt={logo.title} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="newsletter-card-container">
            <div className="newsletter-card">
              <div>
                <h2>
                  cadastre-se e receba nossas
                  <span>novidades e promoções</span>
                </h2>

                <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
              </div>

              <form>
                <input type="text" placeholder="seu e-mail" />

                <button>OK</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="copyright">
          <p>
            <span>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.</span>
            <span>É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</span>
          </p>

          <div className="logo-wrapper">
            <img src={EconverseLogo} alt="Econverse" />

            <img src={VtexLogo} alt="Vtex" />
          </div>
        </div>
      </div>
    </footer>
  );
}
