import type { MarketItemPreview, TenantBranding } from '@marketplace-platform/shared';

export type ListingTrend = 'alta' | 'queda' | 'estavel';
export type ListingRarity = 'common' | 'rare' | 'epic';

export type Listing = MarketItemPreview & {
  rarity: ListingRarity;
  trendLabel: ListingTrend;
  time: string;
  sellers: number;
  description: string;
  averagePrice: number;
  lowestPrice: number;
  highestPrice: number;
  history: Array<{ label: string; value: number }>;
};

export const activeTenant: TenantBranding = {
  slug: 'demo',
  platformName: 'MarketL2',
  logoUrl: '',
  primaryCurrencyName: 'Pride Coin',
  primaryCurrencyCode: 'PC',
  primaryColor: '#ff4d2d',
  secondaryColor: '#09131f',
};

export const listings: Listing[] = [
  {
    id: 'blessed-scroll',
    rarity: 'rare',
    trend: 'up',
    trendLabel: 'alta',
    category: 'ENCHANT',
    name: 'Blessed Scroll: Weapon Enchant',
    price: 128000,
    currency: 'PC',
    listedAt: 'Hoje, 14:20',
    time: 'Hoje, 14:20',
    sellers: 14,
    description: 'Item de alta liquidez para progressao e comparacao de variacao no market.',
    averagePrice: 121500,
    lowestPrice: 119000,
    highestPrice: 132000,
    history: [
      { label: '08:00', value: 118000 },
      { label: '10:00', value: 120500 },
      { label: '12:00', value: 123000 },
      { label: '14:00', value: 128000 },
    ],
  },
  {
    id: 'antharas-fragment',
    rarity: 'epic',
    trend: 'down',
    trendLabel: 'queda',
    category: 'EPIC',
    name: 'Antharas Necklace Fragment',
    price: 925000,
    currency: 'PC',
    listedAt: 'Hoje, 14:08',
    time: 'Hoje, 14:08',
    sellers: 3,
    description: 'Item premium com baixa oferta e alta sensibilidade a novas listagens.',
    averagePrice: 948000,
    lowestPrice: 925000,
    highestPrice: 981000,
    history: [
      { label: '08:00', value: 981000 },
      { label: '10:00', value: 965000 },
      { label: '12:00', value: 942000 },
      { label: '14:00', value: 925000 },
    ],
  },
  {
    id: 'top-grade-coupon',
    rarity: 'rare',
    trend: 'stable',
    trendLabel: 'estavel',
    category: 'COUPON',
    name: 'Top Grade Weapon Coupon',
    price: 214500,
    currency: 'PC',
    listedAt: 'Hoje, 13:54',
    time: 'Hoje, 13:54',
    sellers: 9,
    description: 'Cupom de media rotacao com demanda constante em fases de progressao.',
    averagePrice: 212000,
    lowestPrice: 208500,
    highestPrice: 219000,
    history: [
      { label: '08:00', value: 209000 },
      { label: '10:00', value: 211500 },
      { label: '12:00', value: 213000 },
      { label: '14:00', value: 214500 },
    ],
  },
  {
    id: 'soulshot-pack',
    rarity: 'common',
    trend: 'up',
    trendLabel: 'alta',
    category: 'CONSUMABLE',
    name: 'Soulshot Pack x10.000',
    price: 8200,
    currency: 'PC',
    listedAt: 'Hoje, 13:41',
    time: 'Hoje, 13:41',
    sellers: 29,
    description: 'Consumivel de alto giro, ideal para leitura de piso e teto do market.',
    averagePrice: 8050,
    lowestPrice: 7900,
    highestPrice: 8300,
    history: [
      { label: '08:00', value: 7900 },
      { label: '10:00', value: 8020 },
      { label: '12:00', value: 8110 },
      { label: '14:00', value: 8200 },
    ],
  },
  {
    id: 'dragon-belt-stone',
    rarity: 'epic',
    trend: 'up',
    trendLabel: 'alta',
    category: 'UPGRADE',
    name: 'Dragon Belt Upgrade Stone',
    price: 471000,
    currency: 'PC',
    listedAt: 'Hoje, 13:28',
    time: 'Hoje, 13:28',
    sellers: 5,
    description: 'Upgrade de faixa alta com forte impacto em preco por escassez.',
    averagePrice: 452000,
    lowestPrice: 439000,
    highestPrice: 471000,
    history: [
      { label: '08:00', value: 439000 },
      { label: '10:00', value: 447500 },
      { label: '12:00', value: 459000 },
      { label: '14:00', value: 471000 },
    ],
  },
  {
    id: 'adena-booster',
    rarity: 'common',
    trend: 'stable',
    trendLabel: 'estavel',
    category: 'BOOST',
    name: 'Adena Booster Ticket',
    price: 34500,
    currency: 'PC',
    listedAt: 'Hoje, 13:11',
    time: 'Hoje, 13:11',
    sellers: 18,
    description: 'Item de mid market com comportamento previsivel e volume constante.',
    averagePrice: 34400,
    lowestPrice: 33900,
    highestPrice: 34900,
    history: [
      { label: '08:00', value: 34100 },
      { label: '10:00', value: 34300 },
      { label: '12:00', value: 34450 },
      { label: '14:00', value: 34500 },
    ],
  },
];

export const alertItems = [
  'Blessed Scroll abaixo de 120.000 PC',
  'Antharas Fragment abaixo de 900.000 PC',
  'Dragon Belt Stone acima de 470.000 PC',
];

export const categoryItems = [
  { name: 'ENCHANT', volume: '312 listagens', status: 'Aquecido' },
  { name: 'EPIC', volume: '44 listagens', status: 'Premium' },
  { name: 'CONSUMABLE', volume: '519 listagens', status: 'Liquido' },
];

export const activityItems = [
  { title: 'Nova faixa de Enchant', detail: 'Blessed Scroll ganhou 14 entradas na ultima hora.' },
  { title: 'Epic em queda', detail: 'Antharas Necklace Fragment caiu 4.1% desde o inicio da tarde.' },
  { title: 'Consumivel aquecido', detail: 'Soulshot Pack teve aumento consistente na faixa de giro.' },
];
