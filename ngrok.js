


import 'dotenv/config';
import ngrok from '@ngrok/ngrok';
import os from 'os';

// 🔍 Detect LAN IP automatically
function getLocalIP() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address; // return first non-internal IPv4
      }
    }
  }
  return '127.0.0.1';
}

const listener = await ngrok.connect({
  addr: 5173, // Vite dev server port
  authtoken: process.env.NGROK_AUTHTOKEN
});

const url = listener.url();
const localIP = getLocalIP();

console.log(`
VITE + NGROK Dev Server
  ➜  Local:   http://localhost:5173/nppm/
  ➜  Network: http://${localIP}:5173/nppm/
  ➜  Public:  ${url}/nppm/
`);

// keep alive
process.stdin.resume();
