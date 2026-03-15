# Architecture

## Visao geral

Arquitetura multi-tenant com um backend central e isolamento logico por
`tenant_id`.

## Modulos

### 1. Web Marketplace

Responsavel pela experiencia publica do jogador:

- busca
- listagem
- detalhes de itens
- historico
- alertas

### 2. Admin Panel

Responsavel pela operacao do cliente:

- branding
- moeda
- integracoes
- status do bot/API
- usuarios administrativos

### 3. API / Backend

Responsavel por:

- autenticar requests
- aplicar regras por tenant
- servir dados do marketplace
- registrar historico
- processar alertas

### 4. Discord Bot

Responsavel por:

- ingestao de dados de market via Discord
- comandos
- notificacoes
- rotas de fallback quando nao houver API oficial

### 5. Notification Layer

Responsavel por:

- Discord
- Telegram
- futuros canais (email/webhook)

### 6. Observability Layer

Responsavel por:

- logs
- incidentes
- heartbeat
- status de deploy e integracoes

## Modelo multi-tenant

Cada tenant possui:

- `slug`
- nome da plataforma
- logo
- moeda
- dominio ou subdominio
- integracoes proprias
- usuarios administrativos proprios

## Modos de integracao por tenant

1. `discord_ingest`
2. `api_ingest`
3. `manual_or_hybrid`

## Recomendacao de stack

- frontend: React + Vite
- backend: Supabase + Edge Functions ou API Node dedicada
- banco: Postgres (Supabase)
- bot: Node + discord.js
- deploy: Railway/Vercel/Cloudflare conforme modulo

## Regras tecnicas importantes

- nenhuma tabela principal sem `tenant_id`
- todo endpoint autenticado deve resolver tenant antes de acessar dados
- branding deve vir de `tenant_settings`, nunca hardcoded
- integracoes devem ser armazenadas por tenant, com secrets separados

