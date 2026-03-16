import { Link } from 'react-router-dom';
import type { Listing } from '../data/market';

export function MarketCard({
  id,
  rarity,
  trendLabel,
  category,
  name,
  price,
  currency,
  time,
  sellers,
}: Listing) {
  return (
    <Link className="market-card-link" to={`/item/${id}`}>
      <article className={`market-card rarity-${rarity}`}>
        <div className="market-card-head">
          <span className="category-tag">{category}</span>
          <span className={`trend-tag trend-${trendLabel}`}>{trendLabel}</span>
        </div>

        <h3>{name}</h3>
        <p className="market-card-subline">{rarity} market item</p>

        <div className="market-card-price">
          {price.toLocaleString('pt-BR')} <span>{currency}</span>
        </div>

        <div className="market-card-meta">
          <span>{time}</span>
          <span>{sellers} sellers</span>
        </div>
      </article>
    </Link>
  );
}
