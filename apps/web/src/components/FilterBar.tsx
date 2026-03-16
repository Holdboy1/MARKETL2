const filters = ['Todas', 'Enchant', 'Epic', 'Coupon', 'Consumable', 'Upgrade'];

export function FilterBar() {
  return (
    <section className="filter-shell">
      <div className="search-input">Filtrar item, seller ou categoria</div>
      <div className="price-range">
        <span className="range-box">Min</span>
        <span className="range-divider">-</span>
        <span className="range-box">Max</span>
      </div>
      <div className="filter-pills">
        {filters.map((filter, index) => (
          <span className={`filter-pill ${index === 0 ? 'active' : ''}`} key={filter}>
            {filter}
          </span>
        ))}
      </div>
    </section>
  );
}
