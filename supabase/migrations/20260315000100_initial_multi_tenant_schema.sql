create extension if not exists "pgcrypto";

create table if not exists public.tenants (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.tenant_settings (
  tenant_id uuid primary key references public.tenants(id) on delete cascade,
  platform_name text not null,
  logo_url text,
  primary_currency_name text not null,
  primary_currency_code text not null,
  primary_color text,
  secondary_color text,
  custom_domain text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.tenant_integrations (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  kind text not null,
  status text not null default 'inactive',
  config jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.tenant_admins (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  user_id uuid not null,
  role text not null default 'owner',
  created_at timestamptz not null default now(),
  unique (tenant_id, user_id)
);

create table if not exists public.market_items (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  external_item_id text,
  name text not null,
  currency text not null,
  price numeric(18, 2) not null,
  quantity integer not null default 1,
  seller_name text,
  icon_url text,
  source text not null default 'system',
  listed_at timestamptz not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_market_items_tenant_listed_at
  on public.market_items (tenant_id, listed_at desc);

create index if not exists idx_market_items_tenant_name
  on public.market_items (tenant_id, name);

create table if not exists public.market_events (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  item_name text not null,
  currency text not null,
  price numeric(18, 2) not null,
  quantity integer not null default 1,
  event_type text not null,
  source text not null,
  external_ref text,
  occurred_at timestamptz not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_market_events_tenant_occurred_at
  on public.market_events (tenant_id, occurred_at desc);

create table if not exists public.user_alerts (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  user_id uuid not null,
  item_name text not null,
  currency text not null,
  target_price numeric(18, 2) not null,
  operator text not null,
  notify_discord boolean not null default true,
  notify_telegram boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_user_alerts_tenant_user
  on public.user_alerts (tenant_id, user_id);

create table if not exists public.user_notification_channels (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  user_id uuid not null,
  channel_kind text not null,
  external_user_id text not null,
  status text not null default 'active',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  unique (tenant_id, user_id, channel_kind)
);

create table if not exists public.system_logs (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references public.tenants(id) on delete cascade,
  level text not null,
  category text not null,
  message text not null,
  details jsonb,
  event_type text,
  created_at timestamptz not null default now()
);

create index if not exists idx_system_logs_tenant_created_at
  on public.system_logs (tenant_id, created_at desc);

