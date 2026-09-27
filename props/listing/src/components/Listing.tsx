import type { ListingItem } from '../types';

interface ProductCardProps {
  item: ListingItem;
}

interface ListingProps {
  items?: ListingItem[];
}

function formatTitle(title: string): string {
  if (!title) return '';
  return title.length > 50 ? `${title.slice(0, 50)}…` : title;
}

function formatPrice(price: string, currencyCode: string): string {
  const num = Number(price);
  if (Number.isNaN(num)) return price;
  const value = num.toFixed(2);

  switch (currencyCode) {
    case 'USD': return `$${value}`;
    case 'EUR': return `€${value}`;
    case 'GBP': return `£${value}`;
    default:    return `${currencyCode} ${value}`;
  }
}

function stockClass(quantity: number): string {
  if (quantity <= 10) return 'stock-low';
  if (quantity <= 20) return 'stock-medium';
  return 'stock-high';
}

function ProductCard({ item }: ProductCardProps) {
  const { url, MainImage, title, currency_code, price, quantity } = item;

  return (
    <div className="product-card">
      <img
        src={MainImage?.url_570xN}
        alt={title}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-title">
          <a href={url}>{formatTitle(title)}</a>
        </h3>
        <div className="price-container">
          <div className="product-price">
            {formatPrice(price, currency_code)}
          </div>
          <span className={`stock-badge ${stockClass(quantity)}`}>
            {quantity} left
          </span>
        </div>
      </div>
    </div>
  );
}

function Listing({ items = [] }: ListingProps) {
  return (
    <div className="listing">
      {items.map(item => (
        <ProductCard key={item.listing_id} item={item} />
      ))}
    </div>
  );
}

export default Listing;