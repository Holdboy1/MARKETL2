import {
  type MarketItemPreview,
  type TenantBranding,
} from '@marketplace-platform/shared';

type FeaturedListing = MarketItemPreview & {
  rarity: 'common' | 'rare' | 'epic';
  sellers: number;
};

type CategorySummary = {
  name: string;
  volume: string;
  status: string;
};

type ActivityEntry = {
  id: string;
  title: string;
  detail: string;
  status: 'new' | 'alert' | 'trade';
};

const activeTenant: TenantBranding = {
  slug: 'demo',
  platformName: 'MarketForge',
  logoUrl: '',
  primaryCurrencyName: 'Game Coin',
  primaryCurrencyCode: 'GC',
  primaryColor: '#f97316',
  secondaryColor: '#0b1624',
};

const topStats = [
  { label: 'Itens online', value: '2.184' },
  { label: 'Trades hoje', value: '892' },
  { label: 'Alertas ativos', value: '346' },
  { label: 'Media', value: '+6.4%' },
];

const marketPreview: FeaturedListing[] = [
  {
    id: '1',
    name: 'Blessed Scroll: Weapon Enchant',
    price: 128000,
    currency: 'GC',
    listedAt: 'Hoje, 14:20',
    trend: 'up',
    category: 'Enchant',
    rarity: 'rare',
    sellers: 14,
  },
  {
    id: '2',
    name: 'Antharas Necklace Fragment',
    price: 925000,
    currency: 'GC',
    listedAt: 'Hoje, 14:08',
    trend: 'down',
    category: 'Epic',
    rarity: 'epic',
    sellers: 3,
  },
  {
    id: '3',
    name: 'Top Grade Weapon Coupon',
    price: 214500,
    currency: 'GC',
    listedAt: 'Hoje, 13:54',
    trend: 'stable',
    category: 'Coupon',
    rarity: 'rare',
    sellers: 9,
  },
  {
    id: '4',
    name: 'Soulshot Pack x10.000',
    price: 8200,
    currency: 'GC',
    listedAt: 'Hoje, 13:41',
    trend: 'up',
    category: 'Consumable',
    rarity: 'common',
    sellers: 29,
  },
  {
    id: '5',
    name: 'Dragon Belt Upgrade Stone',
    price: 471000,
    currency: 'GC',
    listedAt: 'Hoje, 13:28',
    trend: 'up',
    category: 'Upgrade',
    rarity: 'epic',
    sellers: 5,
  },
  {
    id: '6',
    name: 'Adena Booster Ticket',
    price: 34500,
    currency: 'GC',
    listedAt: 'Hoje, 13:11',
    trend: 'stable',
    category: 'Boost',
    rarity: 'common',
    sellers: 18,
  },
];

const topCategories: CategorySummary[] = [
  { name: 'Enchant', volume: '312 listagens', status: 'Aquecido' },
  { name: 'Epic', volume: '44 listagens', status: 'Premium' },
  { name: 'Consumable', volume: '519 listagens', status: 'Liquido' },
];

const activityFeed: ActivityEntry[] = [
  {
    id: '1',
    title: 'Novo pico em Enchant',
    detail: 'Blessed Scroll ganhou 14 novas entradas na ultima hora.',
    status: 'new',
  },
  {
    id: '2',
    title: 'Alerta disparado',
    detail: 'Antharas Necklace Fragment entrou abaixo da faixa monitorada.',
    status: 'alert',
  },
  {
    id: '3',
    title: 'Trade de alto valor',
    detail: 'Dragon Belt Upgrade Stone ultrapassou 470.000 GC.',
    status: 'trade',
  },
];

const watchlist = [
  'Blessed Scroll abaixo de 120.000 GC',
  'Item epic novo no market',
  'Cupom acima da faixa media',
];

export default function App() {
  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">M</div>
          <div>
            <span className="brand-kicker">{activeTenant.slug}</span>
            <strong>{activeTenant.platformName}</strong>
          </div>
        </div>
        <div className="tenant-badge">
          {activeTenant.primaryCurrencyName} ({activeTenant.primaryCurrencyCode})
        </div>
      </header>

      <section className="hero-strip">
        <div>
          <span className="eyebrow">Marketplace Demo</span>
          <h1>{activeTenant.platformName}</h1>
          <p className="hero-copy">
            Estrutura de marketplace white-label focada em busca, listagem, watchlist e leitura rapida do market.
          </p>
        </div>
        <div className="hero-actions">
          <button className="primary-action">Novo alerta</button>
          <button className="secondary-action">Favoritos</button>
        </div>
      </section>

      <section className="stats-row">
        {topStats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </article>
        ))}
      </section>

      <section className="market-layout">
        <div className="market-main">
          <article className="surface filter-bar">
            <div className="search-box">Buscar item, categoria ou seller</div>
            <div className="filter-row">
              <span className="filter-chip active">Todos</span>
              <span className="filter-chip">Enchant</span>
              <span className="filter-chip">Epic</span>
              <span className="filter-chip">Consumable</span>
              <span className="filter-chip">Abaixo de 100k</span>
            </div>
          </article>

          <article className="surface listing-surface">
            <div className="section-head">
              <div>
                <span className="micro-label">Live Market</span>
                <h2>Listagens recentes</h2>
              </div>
              <span className="count-pill">{marketPreview.length} itens</span>
            </div>

            <div className="listing-grid">
              {marketPreview.map((item) => (
                <article className="listing-item" key={item.id}>
                  <div className="listing-head">
                    <span className={`rarity ${item.rarity}`}>{item.rarity}</span>
                    <span className={`trend ${item.trend}`}>{trendLabel(item.trend)}</span>
                  </div>
                  <div className="item-category">{item.category}</div>
                  <h3>{item.name}</h3>
                  <div className="item-price">
                    {item.price.toLocaleString('pt-BR')} {item.currency}
                  </div>
                  <div className="listing-meta">
                    <span>{item.listedAt}</span>
                    <span>{item.sellers} sellers</span>
                  </div>
                </article>
              ))}
            </div>
          </article>
        </div>

        <aside className="market-sidebar">
          <article className="surface side-panel">
            <div className="section-head compact">
              <div>
                <span className="micro-label">Watchlist</span>
                <h2>Alertas</h2>
              </div>
            </div>
            <div className="stack-list">
              {watchlist.map((item) => (
                <div className="stack-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="surface side-panel">
            <div className="section-head compact">
              <div>
                <span className="micro-label">Categorias</span>
                <h2>Movimento</h2>
              </div>
            </div>
            <div className="stack-list">
              {topCategories.map((item) => (
                <div className="category-row" key={item.name}>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.volume}</span>
                  </div>
                  <span className="status-pill">{item.status}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="surface side-panel">
            <div className="section-head compact">
              <div>
                <span className="micro-label">Feed</span>
                <h2>Atividade</h2>
              </div>
            </div>
            <div className="activity-list">
              {activityFeed.map((entry) => (
                <div className="activity-row" key={entry.id}>
                  <span className={`activity-dot ${entry.status}`}></span>
                  <div>
                    <strong>{entry.title}</strong>
                    <p>{entry.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </aside>
      </section>
    </main>
  );
}

function trendLabel(trend: MarketItemPreview['trend']) {
  if (trend === 'up') return 'Alta';
  if (trend === 'down') return 'Queda';
  return 'Estavel';
}
