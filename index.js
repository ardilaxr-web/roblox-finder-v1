const noblox = require('noblox.js');
const express = require('express');
const app = express();

// 1. Servidor web para que Render no se apague
app.get('/', (req, res) => {
  res.send('Bot de búsqueda activo 24/7');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

// 2. Lógica del Bot
async function startBot() {
    try {
        // El bot usará la Cookie que pondremos en Render por seguridad
        const currentUser = await noblox.setCookie(process.env.ROBLOX_COOKIE);
        console.log(`Bot conectado como: ${currentUser.UserName} (ID: ${currentUser.UserID})`);

        // Aquí puedes programar la lógica de búsqueda de servidores
        // Por ejemplo, revisar un juego cada 5 minutos
        setInterval(async () => {
            console.log("Rastreando servidores...");
            // Aquí iría tu código de rastreo específico
        }, 300000); 

    } catch (err) {
        console.error("Error al conectar el bot:", err.message);
    }
}

startBot();

