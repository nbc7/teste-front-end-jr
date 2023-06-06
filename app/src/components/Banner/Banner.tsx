import BannerImg from '../../assets/Banner.webp';

import './Banner.scss';

interface BannerProps {
  image?: string;
  title?: string;
  subtitle?: string;
  actionText?: string;
}

export function Banner({
  image = BannerImg,
  title = 'Venha conhecer nossas promoções',
  subtitle = '50% Off nos produtos',
  actionText = 'Ver produto',
}: BannerProps) {
  return (
    <div className="banner-container">
      <img src={image} alt="banner" width={1440} height={390} />

      <div className="banner-overlay"></div>

      <div className="banner-content">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <button>{actionText}</button>
      </div>
    </div>
  );
}
