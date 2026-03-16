type FilterBarProps = {
  search: string;
  minPrice: string;
  maxPrice: string;
  activeCategory: string;
  categories: string[];
  onSearchChange: (value: string) => void;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
};

export function FilterBar({
  search,
  minPrice,
  maxPrice,
  activeCategory,
  categories,
  onSearchChange,
  onMinPriceChange,
  onMaxPriceChange,
  onCategoryChange,
}: FilterBarProps) {
  return (
    <section className="filter-shell">
      <input
        className="search-input"
        type="text"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Filtrar item, seller ou categoria"
      />
      <div className="price-range">
        <input
          className="range-box"
          type="number"
          min="0"
          value={minPrice}
          onChange={(event) => onMinPriceChange(event.target.value)}
          placeholder="Min"
        />
        <span className="range-divider">-</span>
        <input
          className="range-box"
          type="number"
          min="0"
          value={maxPrice}
          onChange={(event) => onMaxPriceChange(event.target.value)}
          placeholder="Max"
        />
      </div>
      <div className="filter-pills">
        <button
          className={`filter-pill ${activeCategory === 'Todas' ? 'active' : ''}`}
          key="Todas"
          onClick={() => onCategoryChange('Todas')}
          type="button"
        >
          Todas
        </button>
        {categories.map((filter) => (
          <button
            className={`filter-pill ${activeCategory === filter ? 'active' : ''}`}
            key={filter}
            onClick={() => onCategoryChange(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}
