import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Radio } from 'lucide-react';
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { ActivityFeed } from './components/ActivityFeed';
import { AlertsPanel } from './components/AlertsPanel';
import { CategoriesPanel } from './components/CategoriesPanel';
import { FilterBar } from './components/FilterBar';
import { Header } from './components/Header';
import { MarketCard } from './components/MarketCard';
import { heroStats, listings } from './data/market';

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
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');

  const categories = useMemo(
    () => Array.from(new Set(listings.map((item) => item.category))),
    [],
  );

  const filteredListings = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    const parsedMin = minPrice ? Number(minPrice) : null;
    const parsedMax = maxPrice ? Number(maxPrice) : null;

    return listings.filter((item) => {
      const matchesSearch =
        !normalizedSearch ||
        item.name.toLowerCase().includes(normalizedSearch) ||
        item.category.toLowerCase().includes(normalizedSearch) ||
        item.description.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        activeCategory === 'Todas' || item.category === activeCategory;

      const matchesMin = parsedMin === null || item.price >= parsedMin;
      const matchesMax = parsedMax === null || item.price <= parsedMax;

      return matchesSearch && matchesCategory && matchesMin && matchesMax;
    });
  }, [activeCategory, maxPrice, minPrice, search]);

  const spotlight = filteredListings[0] ?? listings[1];
  const primaryListings = filteredListings.slice(0, 4);
  const secondaryListings = filteredListings.slice(4);

  return (
    <div className="marketpage">
      <Header />

      <main className="market-shell">
        <section className="hero-stage">
          <div className="hero-copy-block">
            <span className="hero-eyebrow">Marketplace One Shot</span>
            <h1>
              Um market rapido de ler,
              <br />
              forte para operar.
            </h1>
            <p>
              Estrutura focada em consulta, decisao e monitoramento. Menos explicacao, mais leitura de item, faixa de preco e movimento.
            </p>

            <div className="hero-actions">
              <button className="primary-cta" type="button">Abrir alertas</button>
              <button className="secondary-cta" type="button">Ver favoritos</button>
            </div>

            <div className="hero-stat-row">
              {heroStats.map((stat) => (
                <article className="hero-stat-card" key={stat.label}>
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </article>
              ))}
            </div>
          </div>

          <Link className="spotlight-card" to={`/item/${spotlight.id}`}>
            <div className="spotlight-kicker">Item em destaque</div>
            <div className="spotlight-category-row">
              <span className="category-tag">{spotlight.category}</span>
              <span className={`trend-tag trend-${spotlight.trendLabel}`}>{spotlight.trendLabel}</span>
            </div>
            <h2>{spotlight.name}</h2>
            <p>{spotlight.description}</p>
            <div className="spotlight-price">
              {spotlight.price.toLocaleString('pt-BR')} <span>{spotlight.currency}</span>
            </div>
            <div className="spotlight-meta">
              <span>{spotlight.time}</span>
              <span>{spotlight.sellers} sellers</span>
            </div>
          </Link>
        </section>

        <FilterBar
          activeCategory={activeCategory}
          categories={categories}
          maxPrice={maxPrice}
          minPrice={minPrice}
          onCategoryChange={setActiveCategory}
          onMaxPriceChange={setMaxPrice}
          onMinPriceChange={setMinPrice}
          onSearchChange={setSearch}
          search={search}
        />

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
              <span className="item-count">{filteredListings.length} itens</span>
            </div>

            {filteredListings.length > 0 ? (
              <>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
                  className="market-list-grid"
                >
                  {primaryListings.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                    >
                      <MarketCard {...item} />
                    </motion.div>
                  ))}
                </motion.div>

                {secondaryListings.length > 0 ? (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } } }}
                    className="market-list-grid compact-grid"
                  >
                    {secondaryListings.map((item) => (
                      <motion.div
                        key={item.id}
                        variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                      >
                        <MarketCard {...item} />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : null}
              </>
            ) : (
              <div className="empty-state">
                <strong>Nenhum item encontrado</strong>
                <p>Ajuste busca, categoria ou faixa de preco para encontrar listagens.</p>
              </div>
            )}
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
          <strong>{item.averagePrice.toLocaleString('pt-BR')} {item.currency}</strong>
        </article>
        <article className="metric-card">
          <span>Menor preco</span>
          <strong>{item.lowestPrice.toLocaleString('pt-BR')} {item.currency}</strong>
        </article>
        <article className="metric-card">
          <span>Maior preco</span>
          <strong>{item.highestPrice.toLocaleString('pt-BR')} {item.currency}</strong>
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
