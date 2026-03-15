import React from 'react';
import {
  platformCopy,
  type MarketItemPreview,
  type TenantBranding,
} from '@marketplace-platform/shared';

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

const marketPreview: MarketItemPreview[] = [
  {
    id: '1',
    name: 'Blessed Scroll: Weapon Enchant',
    price: 128000,
    currency: 'GC',
    listedAt: 'Hoje, 14:20',
    trend: 'up',
    category: 'Enchant',
  },
  {
    id: '2',
    name: 'Antharas Necklace Fragment',
    price: 925000,
    currency: 'GC',
    listedAt: 'Hoje, 14:08',
    trend: 'down',
    category: 'Epic',
  },
  {
    id: '3',
    name: 'Top Grade Weapon Coupon',
    price: 214500,
    currency: 'GC',
    listedAt: 'Hoje, 13:54',
    trend: 'stable',
    category: 'Coupon',
  },
  {
    id: '4',
    name: 'Soulshot Pack x10.000',
    price: 8200,
    currency: 'GC',
    listedAt: 'Hoje, 13:41',
    trend: 'up',
    category: 'Consumable',
  },
];

const alertExamples = [
  'Avisar quando Blessed Scroll cair abaixo de 120.000 GC',
  'Avisar quando item epic entrar no market',
  'Avisar quando o preco medio subir acima da faixa definida',
];

export default function App() {
  return (
    <main className="shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Marketplace Platform</span>
          <h1>Marketplace white-label para comunidades de jogos.</h1>
          <p className="hero-text">{platformCopy.heroDescription}</p>
          <p className="hero-text secondary">
            Nesta fase, a pagina ja apresenta o produto como algo vendavel: tenant ativo, marketplace demo, estrutura comercial e direcao de produto. O backend real entra depois sem retrabalho visual.
          </p>
          <div className="cta-row">
            <a className="primary-cta" href="#demo-market">
              Ver marketplace demo
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

      <section className="market-section" id="demo-market">
        <div className="section-heading compact">
          <span className="eyebrow soft">Marketplace Demo</span>
          <h2>Primeira experiencia visivel do produto</h2>
          <p>
            Aqui esta o inicio do marketplace publico usando dados mockados. O objetivo e fechar UX, navegacao e linguagem visual antes de ligar Supabase e ingestao real.
          </p>
        </div>

        <div className="market-layout">
          <article className="market-card market-list">
            <div className="market-toolbar">
              <div>
                <div className="preview-eyebrow">Tenant {activeTenant.slug}</div>
                <h3>Itens recentes</h3>
              </div>
              <div className="toolbar-filter">{activeTenant.primaryCurrencyCode}</div>
            </div>

            <div className="item-list">
              {marketPreview.map((item) => (
                <article className="item-row" key={item.id}>
                  <div className="item-main">
                    <div className="item-category">{item.category}</div>
                    <strong>{item.name}</strong>
                    <span>{item.listedAt}</span>
                  </div>
                  <div className="item-meta">
                    <strong>
                      {item.price.toLocaleString('pt-BR')} {item.currency}
                    </strong>
                    <span className={`trend ${item.trend}`}>{trendLabel(item.trend)}</span>
                  </div>
                </article>
              ))}
            </div>
          </article>

          <aside className="market-side">
            <article className="side-card">
              <span className="mini-label">Alertas</span>
              <h3>Exemplos de watchlist</h3>
              <div className="stack-list">
                {alertExamples.map((item) => (
                  <div className="stack-item" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="side-card">
              <span className="mini-label">Pronto para venda</span>
              <h3>Proposta comercial clara</h3>
              <p>
                O cliente ve um produto com marketplace, tenant, branding e operacao. Isso facilita demo comercial antes mesmo da integracao completa.
              </p>
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