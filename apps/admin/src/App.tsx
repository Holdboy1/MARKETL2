const checks = [
  'Tenant settings',
  'Integracoes Discord/API',
  'Usuarios administrativos',
  'Alertas e notificacoes',
  'Logs e saude operacional',
];

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <span className="eyebrow">Admin Console</span>
        <h1>Marketplace Control Center</h1>
        <p>Painel inicial para operacao do tenant, branding, integracoes e governanca.</p>
      </header>

      <section className="layout">
        <article className="card wide">
          <h2>Modulos do painel</h2>
          {checks.map((check) => (
            <div className="row" key={check}>{check}</div>
          ))}
        </article>
        <article className="card">
          <h2>Status</h2>
          <div className="status ok">Estrutura inicial pronta</div>
          <div className="detail">Proximo passo: conectar auth, tenant e dados do Supabase.</div>
        </article>
      </section>
    </main>
  );
}
