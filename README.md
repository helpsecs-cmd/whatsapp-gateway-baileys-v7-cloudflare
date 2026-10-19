<!-- CTA-REALMAKEIA-INI -->
> **⚡ Quer isto funcionando na sua máquina em 10 minutos?**
> O código completo está empacotado, testado e com entrega imediata (`.ZIP` liberado na hora após Pix ou Cartão):
>
> - 🔥 **[Porta de Entrada — Kit Estúdio Google Flow Veo 3.1: R$ 19,90](https://buy.stripe.com/cNi3cxgDv40W8DS5dyebu06)** *(Bíblia 37s + Blueprint JSON + Montador Python)*
> - 📦 **[Comprar Kit Gateway WhatsApp v7: R$ 37](https://buy.stripe.com/00w14pbjb7d807mfScebu04)**
> - 🚀 **[Levar Combo Full-Stack 2-em-1 (Vídeos + Flow + Gateway WhatsApp): R$ 47](https://buy.stripe.com/9B63cxevndBwcU80Xiebu05)**
>
> [Ver demonstração de 37s em realmakeia.com](https://realmakeia.com/?utm_source=github&utm_medium=readme&utm_campaign=whatsapp-gateway-baileys-v7-cloudflare) · [Dossiê Técnico](https://realmakeia.com/webhook-stripe-whatsapp-serverless/?utm_source=github&utm_medium=readme&utm_campaign=whatsapp-gateway-baileys-v7-cloudflare) · Dúvidas no [WhatsApp (Resposta em 3s)](https://wa.me/5547999835120?text=Ol%C3%A1%21%20Vim%20do%20GitHub%20e%20quero%20saber%20sobre%20os%20Deploy%20Kits.)
<!-- CTA-REALMAKEIA-FIM -->

# ⚡ WhatsApp Gateway Self-Hosted (Baileys v7 + Express + Cloudflare Tunnel Auto-Sync)

> 🛠️ **DOSSIÊ DE ENGENHARIA + DIAGNOSTICADOR INTERATIVO (Outubro/2026):**
> Cansado de ver seu bot em `@whiskeysockets/baileys` cair com **`statusCode: 515 (Stream Errored / restart required)`** logo após ler o QR Code, entrar em loop no **`401 (DisconnectReason.loggedOut)`** ou perder o webhook quando a URL do **`trycloudflare.com`** muda?
> - 🔬 **[Acessar Dossiê Completo + Simulador de Diagnóstico Baileys 401/515 no Real Make IA](https://realmakeia.com/baileys-erro-401-515-gateway-whatsapp-cloudflare-tunnel/?utm_source=github&utm_medium=readme&utm_campaign=baileys_v7_repo)**
> - 📦 **[Baixar o Deploy Kit Completo v7 (`server.js` c/ Painel QR Web Dark-Mode + `orchestrator.py` Auto-Sync Cloudflare Pages — R$ 37,00 via Pix/Stripe)](https://buy.stripe.com/00w14pbjb7d807mfScebu04)**

---

## Por Que 90% dos Exemplos de Baileys no GitHub Falham em 2026?

| Problema Comum no GitHub | Causa Técnica Real | Como Nossa Arquitetura v7 Resolve |
| :--- | :--- | :--- |
| **`statusCode: 515` após ler o QR Code** | No protocolo Multi-Device v7, o WhatsApp salva as chaves (`creds.update`) e exige que o socket feche e reconecte. | Preserva `auth_info/` quando `statusCode !== 401` e reconecta automaticamente em 3000ms. |
| **Loop infinito no erro `401 (loggedOut)`** | A sessão foi revogada no celular, mas o script tenta reconectar usando as chaves antigas corrompidas. | Detecta `statusCode === DisconnectReason.loggedOut`, limpa `auth_info/` e renderiza um novo QR Code limpo no navegador. |
| **Erro `405 Connection Failure` na subida** | A tupla `version` embutida no pacote NPM ficou defasada em relação ao build exigido pela Meta (`2.3000.1043857760`). | Executa `await fetchLatestBaileysVersion()` antes de abrir o `makeWASocket`. |
| **URL do `trycloudflare.com` muda ao reiniciar** | O túnel gratuito gera um subdomínio aleatório novo a cada boot, quebrando webhooks na nuvem. | Nosso `orchestrator.py` captura a nova URL via regex no `stdout` e atualiza `EVOLUTION_API_URL` no Cloudflare Pages via API REST em 4 segundos! |

---

## Como Rodar o Starter Aberto (`v1.0 CLI`)

```bash
npm install
node server_starter.js
```

Para testar o envio de mensagem (rota 100% compatível com o padrão **Evolution API**):

```bash
curl -X POST http://localhost:8080/message/sendText/default \
  -H "Content-Type: application/json" \
  -d '{"number": "5511999999999", "text": "Teste de disparo via Baileys v7!"}'
```

---

## 🚀 O Que Vem no Deploy Kit Completo (`v7.2 Pro` — R$ 37,00)?

No pacote completo disponível em **[realmakeia.com](https://realmakeia.com/baileys-erro-401-515-gateway-whatsapp-cloudflare-tunnel/?utm_source=github&utm_medium=readme&utm_campaign=baileys_v7_repo)** ou direto no **[Checkout Oficial da Stripe (R$ 37,00)](https://buy.stripe.com/00w14pbjb7d807mfScebu04)**:
1. **`server.js` Industrial Completo:** Inclui o **Painel Web Dark-Mode em tempo real (`http://localhost:8080`)** que exibe o QR Code em Base64 auto-renovável, status da conexão, número conectado e console de logs ao vivo no navegador.
2. **`orchestrator.py` (Auto-Tunnel Cloudflare Pages Sync):** Sobe o Node.js + `cloudflared` e atualiza automaticamente a variável `EVOLUTION_API_URL` do seu projeto no Cloudflare Pages via API REST.
3. **Guia Completo de Implantação e Troubleshooting (`401 / 515 / 405 / 428 / 440`)**.

---
*Mantido por [Real Make IA](https://realmakeia.com) · HELPSECS LTDA.*
