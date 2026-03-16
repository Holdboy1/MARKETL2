import { Link } from 'react-router-dom';
import { activeTenant } from '../data/market';

export function Header() {
  return (
    <header className="header-shell">
      <Link className="brand-lockup" to="/">
        <div className="brand-mark">ML</div>
        <div>
          <span className="brand-label">{activeTenant.slug}</span>
          <strong>{activeTenant.platformName}</strong>
        </div>
      </Link>

      <div className="header-meta">
        <span className="meta-chip">Marketplace Live</span>
        <span className="meta-chip subtle">
          {activeTenant.primaryCurrencyName} ({activeTenant.primaryCurrencyCode})
        </span>
      </div>
    </header>
  );
}
