import BannerCardImg from '../../assets/Card.png';
import BannerCardBigImg from '../../assets/CardBig.png';

import './BannerCard.scss';

interface BannerCardProps {
  image?: string;
  title?: string;
  subtitle?: string;
  actionText?: string;
  variant?: 'big';
}

export function BannerCard({
  variant,
  image = variant === 'big' ? BannerCardBigImg : BannerCardImg,
  title = 'Parceiros',
  subtitle = 'Lorem ipsum dolor sit amet, consectetur',
  actionText = 'Confira',
}: BannerCardProps) {
  return (
    <div className={`banner-card-container ${variant === 'big' ? 'big' : ''}`}>
      <div>
        <img src={image} alt="banner card" />
      </div>

      <div className="banner-card-overlay"></div>

      <div className="banner-card-content">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <button>{actionText}</button>
      </div>
    </div>
  );
}
