import {
  Link,
  Navigate,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';
import {
  type MarketItemPreview,
  type TenantBranding,
} from '@marketplace-platform/shared';

type FeaturedListing = MarketItemPreview & {
  rarity: 'common' | 'rare' | 'epic';
  sellers: number;
  description: string;
  priceChange: string;
  averagePrice: number;
  lowestPrice: number;
  highestPrice: number;
  history: Array<{ label: string; value: number }>;
  sellerRows: Array<{ name: string; price: number; listedAt: string }>;
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
    description: 'Item premium de enchant usado como referencia de liquidez e preco em economias ativas.',
    priceChange: '+8.2%',
    averagePrice: 121500,
    lowestPrice: 119000,
    highestPrice: 132000,
    history: [
      { label: '08:00', value: 118000 },
      { label: '10:00', value: 120500 },
      { label: '12:00', value: 123000 },
      { label: '14:00', value: 128000 },
    ],
    sellerRows: [
      { name: 'ForgeKeeper', price: 128000, listedAt: '14:20' },
      { name: 'AdenMaster', price: 129500, listedAt: '14:12' },
      { name: 'LuxSeller', price: 130000, listedAt: '13:57' },
    ],
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
    description: 'Item raro de alto valor, normalmente acompanhado por alertas e forte acompanhamento de mercado.',
    priceChange: '-4.1%',
    averagePrice: 948000,
    lowestPrice: 925000,
    highestPrice: 981000,
    history: [
      { label: '08:00', value: 981000 },
      { label: '10:00', value: 965000 },
      { label: '12:00', value: 942000 },
      { label: '14:00', value: 925000 },
    ],
    sellerRows: [
      { name: 'DragonVault', price: 925000, listedAt: '14:08' },
      { name: 'EpicLine', price: 938000, listedAt: '13:44' },
      { name: 'RaidBroker', price: 955000, listedAt: '12:59' },
    ],
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
    description: 'Cupom de alta procura em servidores com ritmo acelerado de progressao e rotacao de equipamentos.',
    priceChange: '+0.8%',
    averagePrice: 212000,
    lowestPrice: 208500,
    highestPrice: 219000,
    history: [
      { label: '08:00', value: 209000 },
      { label: '10:00', value: 211500 },
      { label: '12:00', value: 213000 },
      { label: '14:00', value: 214500 },
    ],
    sellerRows: [
      { name: 'CouponKing', price: 214500, listedAt: '13:54' },
      { name: 'QuickTrade', price: 215000, listedAt: '13:39' },
      { name: 'SmithHall', price: 216000, listedAt: '13:21' },
    ],
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
    description: 'Consumivel de alta rotacao, util para testar filtros, tendencias e faixas de preco de itens liquidos.',
    priceChange: '+2.4%',
    averagePrice: 8050,
    lowestPrice: 7900,
    highestPrice: 8300,
    history: [
      { label: '08:00', value: 7900 },
      { label: '10:00', value: 8020 },
      { label: '12:00', value: 8110 },
      { label: '14:00', value: 8200 },
    ],
    sellerRows: [
      { name: 'SupplyCore', price: 8200, listedAt: '13:41' },
      { name: 'FastAdena', price: 8225, listedAt: '13:36' },
      { name: 'ShopBridge', price: 8250, listedAt: '13:28' },
    ],
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
    description: 'Item de upgrade de alto impacto, bom candidato para tela de detalhe com foco em historico e sellers.',
    priceChange: '+5.7%',
    averagePrice: 452000,
    lowestPrice: 439000,
    highestPrice: 471000,
    history: [
      { label: '08:00', value: 439000 },
      { label: '10:00', value: 447500 },
      { label: '12:00', value: 459000 },
      { label: '14:00', value: 471000 },
    ],
    sellerRows: [
      { name: 'ScaleVault', price: 471000, listedAt: '13:28' },
      { name: 'StoneHub', price: 473000, listedAt: '13:02' },
      { name: 'LegendCraft', price: 478000, listedAt: '12:47' },
    ],
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
    description: 'Item intermediario com volume constante, adequado para visualizar estabilidade de preco.',
    priceChange: '+0.3%',
    averagePrice: 34400,
    lowestPrice: 33900,
    highestPrice: 34900,
    history: [
      { label: '08:00', value: 34100 },
      { label: '10:00', value: 34300 },
      { label: '12:00', value: 34450 },
      { label: '14:00', value: 34500 },
    ],
    sellerRows: [
      { name: 'DailyBooster', price: 34500, listedAt: '13:11' },
      { name: 'AdenShop', price: 34600, listedAt: '12:58' },
      { name: 'PrimeLoot', price: 34750, listedAt: '12:43' },
    ],
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
    <Routes>
      <Route path="/" element={<MarketplaceHome />} />
      <Route path="/item/:itemId" element={<ItemDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function MarketplaceHome() {
  return (
    <main className="shell">
      <PageHeader />

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
                <Link className="listing-link" key={item.id} to={`/item/${item.id}`}>
                  <article className="listing-item">
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
                </Link>
              ))}
            </div>
          </article>
        </div>

        <MarketplaceSidebar />
      </section>
    </main>
  );
}

function ItemDetailPage() {
  const { itemId } = useParams();
  const item = marketPreview.find((entry) => entry.id === itemId);

  if (!item) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="shell">
      <PageHeader />

      <section className="detail-hero">
        <div>
          <Link className="back-link" to="/">
            Voltar ao marketplace
          </Link>
          <div className="detail-category">{item.category}</div>
          <h1>{item.name}</h1>
          <p className="hero-copy">{item.description}</p>
        </div>
        <div className="detail-price-card">
          <span className={`trend ${item.trend}`}>{trendLabel(item.trend)}</span>
          <strong>
            {item.price.toLocaleString('pt-BR')} {item.currency}
          </strong>
          <span className="price-change">{item.priceChange} nas ultimas horas</span>
        </div>
      </section>

      <section className="detail-stats">
        <article className="stat-card">
          <span>Preco medio</span>
          <strong>{item.averagePrice.toLocaleString('pt-BR')} {item.currency}</strong>
        </article>
        <article className="stat-card">
          <span>Menor preco</span>
          <strong>{item.lowestPrice.toLocaleString('pt-BR')} {item.currency}</strong>
        </article>
        <article className="stat-card">
          <span>Maior preco</span>
          <strong>{item.highestPrice.toLocaleString('pt-BR')} {item.currency}</strong>
        </article>
        <article className="stat-card">
          <span>Sellers</span>
          <strong>{item.sellers}</strong>
        </article>
      </section>

      <section className="detail-layout">
        <div className="detail-main">
          <article className="surface detail-panel">
            <div className="section-head">
              <div>
                <span className="micro-label">Historico</span>
                <h2>Variacao de preco</h2>
              </div>
            </div>
            <div className="history-grid">
              {item.history.map((point) => (
                <div className="history-bar" key={point.label}>
                  <span>{point.label}</span>
                  <strong>{point.value.toLocaleString('pt-BR')}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="surface detail-panel">
            <div className="section-head">
              <div>
                <span className="micro-label">Listagens</span>
                <h2>Sellers recentes</h2>
              </div>
            </div>
            <div className="seller-table">
              {item.sellerRows.map((seller) => (
                <div className="seller-row" key={`${item.id}-${seller.name}`}>
                  <div>
                    <strong>{seller.name}</strong>
                    <span>{seller.listedAt}</span>
                  </div>
                  <strong>
                    {seller.price.toLocaleString('pt-BR')} {item.currency}
                  </strong>
                </div>
              ))}
            </div>
          </article>
        </div>

        <aside className="detail-side">
          <article className="surface side-panel">
            <div className="section-head compact">
              <div>
                <span className="micro-label">Alerta</span>
                <h2>Watch item</h2>
              </div>
            </div>
            <div className="stack-list">
              <div className="stack-item">Avisar abaixo de {item.lowestPrice.toLocaleString('pt-BR')} {item.currency}</div>
              <div className="stack-item">Avisar acima de {item.highestPrice.toLocaleString('pt-BR')} {item.currency}</div>
              <div className="stack-item">Disparar em nova listagem rare/epic</div>
            </div>
          </article>

          <article className="surface side-panel">
            <div className="section-head compact">
              <div>
                <span className="micro-label">Resumo</span>
                <h2>Contexto rapido</h2>
              </div>
            </div>
            <div className="stack-list">
              <div className="stack-item">Rarity: {item.rarity}</div>
              <div className="stack-item">Categoria: {item.category}</div>
              <div className="stack-item">Ultima listagem: {item.listedAt}</div>
            </div>
          </article>
        </aside>
      </section>
    </main>
  );
}

function MarketplaceSidebar() {
  return (
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
  );
}

function PageHeader() {
  return (
    <header className="topbar">
      <Link className="brand" to="/">
        <div className="brand-mark">M</div>
        <div>
          <span className="brand-kicker">{activeTenant.slug}</span>
          <strong>{activeTenant.platformName}</strong>
        </div>
      </Link>
      <div className="tenant-badge">
        {activeTenant.primaryCurrencyName} ({activeTenant.primaryCurrencyCode})
      </div>
    </header>
  );
}

function trendLabel(trend: MarketItemPreview['trend']) {
  if (trend === 'up') return 'Alta';
  if (trend === 'down') return 'Queda';
  return 'Estavel';
}
