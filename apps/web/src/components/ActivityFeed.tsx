import { activityItems } from '../data/market';

export function ActivityFeed() {
  return (
    <section className="sidebar-panel">
      <div className="panel-head">
        <div>
          <span className="panel-kicker">Feed</span>
          <h2>Atividade</h2>
        </div>
      </div>

      <div className="panel-list">
        {activityItems.map((item) => (
          <div className="activity-item" key={item.title}>
            <span className="activity-dot" />
            <div>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
