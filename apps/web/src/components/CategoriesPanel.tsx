import { categoryItems } from '../data/market';

export function CategoriesPanel() {
  return (
    <section className="sidebar-panel">
      <div className="panel-head">
        <div>
          <span className="panel-kicker">Categorias</span>
          <h2>Movimento</h2>
        </div>
      </div>

      <div className="panel-list">
        {categoryItems.map((item) => (
          <div className="category-item" key={item.name}>
            <div>
              <strong>{item.name}</strong>
              <span>{item.volume}</span>
            </div>
            <span className="status-chip">{item.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
