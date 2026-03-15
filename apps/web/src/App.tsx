import React from 'react';
import {
  platformCopy,
  type MarketItemPreview,
  type TenantBranding,
} from '@marketplace-platform/shared';

type FeaturedListing = MarketItemPreview & {
  rarity: 'common' | 'rare' | 'epic';
  sellers: number;
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

const tenantExamples: TenantBranding[] = [
  {
    slug: 'pride',
    platformName: 'Pride Market',
    primaryCurrencyName: 'Pride Coin',
    primaryCurrencyCode: 'PC',
    primaryColor: '#f97316',
    secondaryColor: '#190d08',
  },
  {
    slug: 'skelth',
    platformName: 'Skelth Market',
    primaryCurrencyName: 'Skelth Coin',
    primaryCurrencyCode: 'SC',
    primaryColor: '#22c55e',
    secondaryColor: '#07130d',
  },
  {
    slug: 'zgaming',
    platformName: 'ZGaming Market',
    primaryCurrencyName: 'zCoin',
    primaryCurrencyCode: 'ZC',
    primaryColor: '#38bdf8',
    secondaryColor: '#07121a',
  },
];

const heroMetrics = [
  { label: 'Modelo', value: 'SaaS White-Label' },
  { label: 'Fase atual', value: 'Marketplace Demo' },
  { label: 'Deploy web', value: 'Cloudflare Pages' },
  { label: 'Dados', value: 'Mock + Multi-tenant' },
];

const marketplaceStats = [
  { label: 'Itens monitorados', value: '2.184' },
  { label: 'Alertas ativos', value: '346' },
  { label: 'Movimentos hoje', value: '892' },
  { label: 'Tendencia media', value: '+6.4%' },
];

const modules = [
  {
    title: 'Marketplace publico',
    text: 'Busca, filtros, listagem e comparacao de itens em uma experiencia pensada para economia de servidor.',
  },
  {
    title: 'Tenant branding',
    text: 'Cada servidor ganha nome, logo, moeda, identidade visual e configuracao propria no mesmo nucleo de produto.',
  },
  {
    title: 'Painel administrativo',
    text: 'A staff configura moeda, integracoes, alertas, canais e governanca sem depender de acesso tecnico ao banco.',
  },
  {
    title: 'Integracoes futuras',
    text: 'Discord, API do servidor, historico operacional, eventos de market e camada de notificacao multicanal.',
  },
];

const operations = [
  'Front-first com demo navegavel antes da integracao real',
  'Bot desacoplado da pagina publica',
  'Entidades multi-tenant desde a fundacao do banco',
  'Preparado para tenant por dominio, slug ou subdominio',
  'Fluxo comercial pronto para virar produto white-label',
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

const alertExamples = [
  'Avisar quando Blessed Scroll cair abaixo de 120.000 GC',
  'Avisar quando item epic entrar no market',
  'Avisar quando o preco medio subir acima da faixa definida',
];

const topCategories = [
  { name: 'Enchant', volume: '312 listagens', status: 'Aquecido' },
  { name: 'Epic', volume: '44 listagens', status: 'Premium' },
  { name: 'Consumable', volume: '519 listagens', status: 'Liquido' },
];

const activityFeed: ActivityEntry[] = [
  {
    id: '1',
    title: 'Novo pico de listagens em Enchant',
    detail: 'Blessed Scroll ganhou 14 novas entradas na ultima hora.',
    status: 'new',
  },
  {
    id: '2',
    title: 'Alerta de preco disparado',
    detail: 'Antharas Necklace Fragment entrou abaixo da faixa monitorada.',
    status: 'alert',
  },
  {
    id: '3',
    title: 'Trade de alto valor identificado',
    detail: 'Dragon Belt Upgrade Stone ultrapassou 470.000 GC.',
    status: 'trade',
  },
];

export default function App() {
  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">M</div>
          <div>
            <span className="brand-kicker">Tenant Demo</span>
            <strong>{activeTenant.platformName}</strong>
          </div>
        </div>
        <nav className="topnav">
          <a href="#marketplace">Marketplace</a>
          <a href="#tenants">White-label</a>
          <a href="#architecture">Arquitetura</a>
        </nav>
      </header>

      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Marketplace Platform</span>
          <h1>Marketplace white-label para comunidades de jogos.</h1>
          <p className="hero-text">{platformCopy.heroDescription}</p>
          <p className="hero-text secondary">
            Nesta fase, a pagina ja apresenta o produto como algo vendavel: tenant ativo, marketplace demo, estrutura comercial e direcao de produto. O backend real entra depois sem retrabalho visual.
          </p>
          <div className="cta-row">
            <a className="primary-cta" href="#marketplace">
              Abrir marketplace demo
            </a>
            <a className="secondary-cta" href="#tenants">
              Explorar white-label
            </a>
          </div>
        </div>

        <div className="hero-preview">
          <div className="preview-header">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="preview-label">Tenant Preview</span>
          </div>
          <div className="preview-surface">
            <div className="preview-brand">
              <div>
                <div className="preview-eyebrow">Tenant ativo</div>
                <h2>{activeTenant.platformName}</h2>
              </div>
              <div className="coin-badge">
                {activeTenant.primaryCurrencyName} ({activeTenant.primaryCurrencyCode})
              </div>
            </div>

            <div className="preview-grid">
              <article className="preview-card accent-card">
                <span className="mini-label">Marketplace</span>
                <strong>Itens, historico e preco</strong>
                <p>Camada publica para consulta e decisao de compra.</p>
              </article>
              <article className="preview-card">
                <span className="mini-label">Admin</span>
                <strong>Branding por tenant</strong>
                <p>Nome, logo, moeda e integracoes administradas pelo cliente.</p>
              </article>
              <article className="preview-card">
                <span className="mini-label">Signals</span>
                <strong>Alertas e notificacoes</strong>
                <p>Preparado para sinais de mercado e automacao futura.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="metric-row">
        {heroMetrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </article>
        ))}
      </section>

      <section className="marketplace-shell" id="marketplace">
        <div className="section-heading compact">
          <span className="eyebrow soft">Marketplace Demo</span>
          <h2>Pagina completa do marketplace</h2>
          <p>
            A partir daqui o produto deixa de ser apenas landing. Ja existe uma estrutura visual coerente de marketplace, com filtros, destaques, feed de atividade e watchlist.
          </p>
        </div>

        <div className="marketplace-stats">
          {marketplaceStats.map((stat) => (
            <article className="stat-tile" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </article>
          ))}
        </div>

        <div className="marketplace-layout">
          <section className="market-main">
            <article className="market-card filters-card">
              <div className="market-toolbar">
                <div>
                  <div className="preview-eyebrow">Tenant {activeTenant.slug}</div>
                  <h3>Filtro de consulta</h3>
                </div>
                <div className="toolbar-filter">{activeTenant.primaryCurrencyCode}</div>
              </div>

              <div className="filters-grid">
                <div className="filter-chip active">Todos</div>
                <div className="filter-chip">Enchant</div>
                <div className="filter-chip">Epic</div>
                <div className="filter-chip">Consumable</div>
                <div className="filter-chip">Upgrade</div>
                <div className="filter-chip">Abaixo de 100k</div>
              </div>
            </article>

            <article className="market-card listing-card">
              <div className="market-toolbar">
                <div>
                  <div className="preview-eyebrow">Listagem</div>
                  <h3>Itens recentes</h3>
                </div>
                <div className="toolbar-filter">{marketPreview.length} itens</div>
              </div>

              <div className="listing-grid">
                {marketPreview.map((item) => (
                  <article className="listing-item" key={item.id}>
                    <div className="listing-top">
                      <span className={`rarity ${item.rarity}`}>{item.rarity}</span>
                      <span className={`trend ${item.trend}`}>{trendLabel(item.trend)}</span>
                    </div>
                    <div className="item-category">{item.category}</div>
                    <h4>{item.name}</h4>
                    <div className="listing-price">
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
          </section>

          <aside className="market-sidebar">
            <article className="side-card">
              <span className="mini-label">Watchlist</span>
              <h3>Alertas simulados</h3>
              <div className="stack-list">
                {alertExamples.map((item) => (
                  <div className="stack-item" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="side-card">
              <span className="mini-label">Categorias</span>
              <h3>Movimento por tipo</h3>
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

            <article className="side-card">
              <span className="mini-label">Feed</span>
              <h3>Atividade recente</h3>
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
        </div>
      </section>

      <section className="split-section" id="tenants">
        <div className="section-heading">
          <span className="eyebrow soft">White-label</span>
          <h2>Um produto, multiplos servidores.</h2>
          <p>
            A mesma plataforma serve varios clientes. O que muda entre eles e a configuracao visual, a moeda, os dados e as integracoes.
          </p>
        </div>

        <div className="tenant-grid">
          {tenantExamples.map((tenant) => (
            <article
              className="tenant-card"
              key={tenant.slug}
              style={
                {
                  ['--tenant-primary' as string]: tenant.primaryColor,
                  ['--tenant-secondary' as string]: tenant.secondaryColor,
                } as React.CSSProperties
              }
            >
              <div className="tenant-header">
                <span className="tenant-slug">{tenant.slug}</span>
                <span className="tenant-currency">{tenant.primaryCurrencyCode}</span>
              </div>
              <h3>{tenant.platformName}</h3>
              <p>Moeda principal: {tenant.primaryCurrencyName}</p>
              <div className="tenant-bar"></div>
            </article>
          ))}
        </div>
      </section>

      <section className="module-section">
        <div className="section-heading compact">
          <span className="eyebrow soft">Core Modules</span>
          <h2>O que compoe a plataforma</h2>
        </div>
        <div className="module-grid">
          {modules.map((module) => (
            <article className="module-card" key={module.title}>
              <h3>{module.title}</h3>
              <p>{module.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="architecture-section" id="architecture">
        <article className="architecture-card main-card">
          <span className="eyebrow soft">Architecture</span>
          <h2>Front-first, bot later.</h2>
          <p>
            O produto ja pode ser mostrado e validado comercialmente sem depender do bot. Isso reduz retrabalho, acelera o design da experiencia e deixa a integracao entrar depois sobre uma base estavel.
          </p>
        </article>

        <article className="architecture-card list-card">
          <h3>Primeira trilha de desenvolvimento</h3>
          <div className="operation-list">
            {operations.map((item) => (
              <div className="operation-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}

function trendLabel(trend: MarketItemPreview['trend']) {
  if (trend === 'up') return 'Alta';
  if (trend === 'down') return 'Queda';
  return 'Estavel';
}
