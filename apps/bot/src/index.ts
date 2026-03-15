import 'dotenv/config';
import { botStartupChecklist } from '@marketplace-platform/shared';

const summary = botStartupChecklist({
  tenant: process.env.DEFAULT_TENANT_SLUG || 'demo',
  hasBotToken: Boolean(process.env.DISCORD_BOT_TOKEN),
  hasAppId: Boolean(process.env.DISCORD_APP_ID),
});

console.log('Marketplace Platform Bot');
console.log('========================');
console.log(`Tenant padrao: ${summary.tenant}`);
console.log(`Discord bot token: ${summary.hasBotToken ? 'configurado' : 'ausente'}`);
console.log(`Discord app id: ${summary.hasAppId ? 'configurado' : 'ausente'}`);
console.log('Bot scaffold pronto para ingestao, comandos e notificacoes.');
