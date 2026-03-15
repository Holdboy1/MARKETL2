import { platformCopy, type TenantBranding } from '@marketplace-platform/shared';

const tenant: TenantBranding = {
  slug: 'demo',
  platformName: 'MarketForge',
  logoUrl: '',
  primaryCurrencyName: 'Game Coin',
  primaryCurrencyCode: 'GC',
  primaryColor: '#f97316',
  secondaryColor: '#0f172a',
};

const highlights = [
  'Marketplace white-label por servidor',
  'Alertas, historico de precos e integracoes',
  'Base pronta para Discord, API e painel admin',
];

export default function App() {
  return (
    <main className="page">
      <section className="hero">
        <span className="eyebrow">MVP Foundation</span>
        <h1>{tenant.platformName}</h1>
        <p>{platformCopy.heroDescription}</p>
        <div className="pill-row">
          <span className="pill">Tenant: {tenant.slug}</span>
          <span className="pill">Moeda: {tenant.primaryCurrencyName}</span>
          <span className="pill">Codigo: {tenant.primaryCurrencyCode}</span>
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h2>Produto</h2>
          <p>Base inicial do marketplace publico com suporte a branding por tenant.</p>
        </article>
        <article className="card">
          <h2>Integracoes</h2>
          <p>Discord bot, API do servidor, notificacoes e historico de mercado.</p>
        </article>
        <article className="card">
          <h2>Admin</h2>
          <p>Painel proprio para cada servidor configurar logo, moeda e canais.</p>
        </article>
      </section>

      <section className="card stack">
        <h2>Escopo inicial</h2>
        {highlights.map((item) => (
          <div className="list-item" key={item}>{item}</div>
        ))}
      </section>
    </main>
  );
}
