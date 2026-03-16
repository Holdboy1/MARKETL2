import { alertItems } from '../data/market';

export function AlertsPanel() {
  return (
    <section className="sidebar-panel">
      <div className="panel-head">
        <div>
          <span className="panel-kicker">Watchlist</span>
          <h2>Alertas</h2>
        </div>
      </div>

      <div className="panel-list">
        {alertItems.map((item) => (
          <div className="panel-item" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
