const noblox = require('noblox.js');
const express = require('express');
const app = express();

const GAME_ID = 109983668079237; // ID del juego que me pasaste

app.get('/', (req, res) => {
  res.send('Finder de Steal a Brainrot ACTIVO');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Panel de control en puerto ${PORT}`);
});

async function startFinder() {
    try {
        await noblox.setCookie(process.env.ROBLOX_COOKIE);
        console.log("Bot conectado y rastreando el juego...");

        // Función para escanear servidores
        setInterval(async () => {
            try {
                const servers = await noblox.getGameInstances(GAME_ID);
                console.log(`--- ESCANEO ---`);
                console.log(`Servidores encontrados: ${servers.Collection.length}`);
                
                // Aquí el bot revisa cada servidor
                servers.Collection.forEach(server => {
                    console.log(`Servidor ID: ${server.Guid} | Jugadores: ${server.CurrentPlayers.length}`);
                });
            } catch (e) {
                console.log("Error al escanear: " + e.message);
            }
        }, 120000); // Escanea cada 2 minutos (120000 ms)

    } catch (err) {
        console.error("Error de conexión:", err.message);
    }
}

startFinder();
