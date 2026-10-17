/**
 * WhatsApp Gateway Starter v1.0 (Baileys + Express)
 * Desenvolvido por Real Make IA (https://realmakeia.com) · HELPSECS LTDA
 */
const express = require('express');
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion } = require('baileys');
const pino = require('pino');

console.log("================================================================================");
console.log("[REAL MAKE IA — DIAGNOSTICO BAILEYS v7 & AUTO-TUNNEL CLOUDFLARE]");
console.log("Voce esta rodando o Starter CLI basico.");
console.log("-> Para ver o guia completo anti-queda (Erros 401/515) e o Simulador Online:");
console.log("   https://realmakeia.com/baileys-erro-401-515-gateway-whatsapp-cloudflare-tunnel/");
console.log("-> Para baixar o Deploy Kit Completo (Painel QR Web Dark-Mode + orchestrator.py):");
console.log("   https://buy.stripe.com/00w14pbjb7d807mfScebu04");
console.log("================================================================================");

const app = express();
app.use(express.json());
let sock = null;

async function start() {
    const { version } = await fetchLatestBaileysVersion();
    console.log(`[+] Baileys v${version.join('.')} inicializando...`);
    const { state, saveCreds } = await useMultiFileAuthState('./auth_info');
    sock = makeWASocket({ version, auth: state, logger: pino({ level: 'silent' }) });
    sock.ev.on('creds.update', saveCreds);
    sock.ev.on('connection.update', ({ connection, lastDisconnect }) => {
        if (connection === 'close') {
            const code = (lastDisconnect?.error)?.output?.statusCode;
            console.log(`[!] Conexao fechada (statusCode: ${code}). Consulte o guia 401/515 em realmakeia.com`);
            if (code !== DisconnectReason.loggedOut) setTimeout(start, 3000);
        } else if (connection === 'open') {
            console.log('[OK] WhatsApp Conectado!');
        }
    });
}

app.post('/message/sendText/:instance', async (req, res) => {
    const { number, text } = req.body;
    if (!sock) return res.status(503).json({ error: 'Socket offline' });
    const jid = `${String(number).replace(/\D/g, '')}@s.whatsapp.net`;
    const r = await sock.sendMessage(jid, { text });
    res.json({ status: 'success', key: r.key });
});

app.listen(8080, () => {
    console.log('[*] Servidor HTTP na porta 8080');
    start();
});
