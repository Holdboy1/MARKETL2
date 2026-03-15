# Deploy Notes

## Web app

Aplicacao publica prevista para deploy em Cloudflare Pages ou Vercel.

## Admin app

Painel administrativo pode subir em dominio separado ou protegido por login.

## Bot

Bot deve subir em Railway, com variaveis separadas por ambiente.

## Supabase

Aplicar a migration inicial:

- `supabase/migrations/20260315000100_initial_multi_tenant_schema.sql`

## Ambientes recomendados

- `local`
- `staging`
- `production`

## Variaveis minimas

### Web/Admin
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_DEFAULT_TENANT`

### Bot
- `DISCORD_BOT_TOKEN`
- `DISCORD_APP_ID`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `DEFAULT_TENANT_SLUG`
