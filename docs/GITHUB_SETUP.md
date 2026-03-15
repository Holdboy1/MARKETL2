# GitHub Setup Checklist

## Antes do primeiro push

- criar repositorio novo no GitHub
- revisar `.env.example`
- confirmar que nao existe secret real no projeto
- instalar dependencias e gerar `package-lock.json`
- validar build do `apps/web`
- validar build do `apps/admin`
- validar inicializacao do `apps/bot`

## Estrutura esperada

- monorepo com `apps/*`
- pacote compartilhado em `packages/shared`
- docs de produto e deploy
- schema inicial do Supabase
