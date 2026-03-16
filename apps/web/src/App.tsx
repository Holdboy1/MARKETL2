import { motion } from 'framer-motion';
import { Radio } from 'lucide-react';
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { ActivityFeed } from './components/ActivityFeed';
import { AlertsPanel } from './components/AlertsPanel';
import { CategoriesPanel } from './components/CategoriesPanel';
import { FilterBar } from './components/FilterBar';
import { Header } from './components/Header';
import { MarketCard } from './components/MarketCard';
import { listings } from './data/market';

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
    <div className="marketpage">
      <Header />

      <main className="market-shell">
        <FilterBar />

        <div className="market-grid">
          <div className="market-content">
            <div className="section-title-row">
              <div>
                <div className="live-label">
                  <Radio className="live-icon" />
                  <span>Live Market</span>
                </div>
                <h1>Listagens recentes</h1>
              </div>
              <span className="item-count">{listings.length} itens</span>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06 } },
              }}
              className="market-list-grid"
            >
              {listings.map((item) => (
                <motion.div
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <MarketCard {...item} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <aside className="market-sidebar">
            <AlertsPanel />
            <CategoriesPanel />
            <ActivityFeed />
          </aside>
        </div>
      </main>
    </div>
  );
}

function ItemDetailPage() {
  const { itemId } = useParams();
  const item = listings.find((entry) => entry.id === itemId);

  if (!item) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="detail-shell">
      <Header />

      <section className="detail-hero-panel">
        <div>
          <Link className="detail-back" to="/">
            Voltar ao marketplace
          </Link>
          <div className="detail-category">{item.category}</div>
          <h1>{item.name}</h1>
          <p className="detail-description">{item.description}</p>
        </div>

        <div className="detail-price-panel">
          <span className={`trend-tag trend-${item.trendLabel}`}>{item.trendLabel}</span>
          <strong>
            {item.price.toLocaleString('pt-BR')} {item.currency}
          </strong>
          <span className="detail-price-caption">Atualizado em {item.time}</span>
        </div>
      </section>

      <section className="detail-stats-grid">
        <article className="metric-card">
          <span>Preco medio</span>
          <strong>
            {item.averagePrice.toLocaleString('pt-BR')} {item.currency}
          </strong>
        </article>
        <article className="metric-card">
          <span>Menor preco</span>
          <strong>
            {item.lowestPrice.toLocaleString('pt-BR')} {item.currency}
          </strong>
        </article>
        <article className="metric-card">
          <span>Maior preco</span>
          <strong>
            {item.highestPrice.toLocaleString('pt-BR')} {item.currency}
          </strong>
        </article>
        <article className="metric-card">
          <span>Sellers</span>
          <strong>{item.sellers}</strong>
        </article>
      </section>

      <section className="detail-grid">
        <div className="detail-main-panels">
          <article className="detail-panel">
            <div className="panel-head">
              <div>
                <span className="panel-kicker">Historico</span>
                <h2>Variacao de preco</h2>
              </div>
            </div>

            <div className="history-grid">
              {item.history.map((point) => (
                <div className="history-card" key={point.label}>
                  <span>{point.label}</span>
                  <strong>{point.value.toLocaleString('pt-BR')}</strong>
                </div>
              ))}
            </div>
          </article>

          <article className="detail-panel">
            <div className="panel-head">
              <div>
                <span className="panel-kicker">Resumo</span>
                <h2>Contexto rapido</h2>
              </div>
            </div>

            <div className="panel-list">
              <div className="panel-item">Categoria: {item.category}</div>
              <div className="panel-item">Raridade: {item.rarity}</div>
              <div className="panel-item">Ultima listagem: {item.time}</div>
            </div>
          </article>
        </div>

        <aside className="market-sidebar">
          <AlertsPanel />
          <CategoriesPanel />
        </aside>
      </section>
    </main>
  );
}
