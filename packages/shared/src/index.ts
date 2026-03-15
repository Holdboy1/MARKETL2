export type TenantBranding = {
  slug: string;
  platformName: string;
  logoUrl?: string;
  primaryCurrencyName: string;
  primaryCurrencyCode: string;
  primaryColor?: string;
  secondaryColor?: string;
};

export type BotStartupConfig = {
  tenant: string;
  hasBotToken: boolean;
  hasAppId: boolean;
};

export type MarketItemPreview = {
  id: string;
  name: string;
  price: number;
  currency: string;
  listedAt: string;
  trend: 'up' | 'down' | 'stable';
  category: string;
};

export const platformCopy = {
  heroDescription:
    'Plataforma multi-tenant de marketplace para servidores de jogos, com branding proprio, painel administrativo e integracoes por tenant.',
};

export function botStartupChecklist(config: BotStartupConfig) {
  return config;
}