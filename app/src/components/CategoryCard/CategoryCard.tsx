import './CategoryCard.scss';

interface CategoryCardProps {
  image: string;
  title: string;
  onSelect: (title: string) => void;
  isSelected: boolean;
}

export function CategoryCard({ image, title, onSelect, isSelected }: CategoryCardProps) {
  function handleClick() {
    onSelect(title);
  }

  return (
    <div className={`category-card-container ${isSelected ? 'category-card-selected' : ''}`} onClick={handleClick}>
      <div className="category-card">
        <img src={image} alt={title} height={61} width={61} />
      </div>

      <span>{title}</span>
    </div>
  );
}
