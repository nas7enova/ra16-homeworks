import Star from './Star';

interface StarsProps {
  count?: number;
}

function Stars({ count = 0 }: StarsProps) {
  // Если count не число, меньше 1 или больше 5 — ничего не рендерим
  if (typeof count !== 'number' || count < 1 || count > 5) {
    return null;
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} />
      ))}
    </ul>
  );
}

export default Stars;