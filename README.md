# Marketplace Platform

Monorepo inicial do produto white-label de marketplace para servidores de jogos.

## Estrutura

- `apps/web`: marketplace publico por tenant
- `apps/admin`: painel administrativo
- `apps/bot`: integracoes Discord e ingestao
- `packages/shared`: tipos, config e utilitarios comuns
- `supabase`: schema e migrations
- `docs`: arquitetura, escopo e roadmap

## Proximo passo

1. instalar dependencias
2. configurar Supabase dedicado
3. configurar Cloudflare/Vercel para apps web
4. configurar Railway para bot
