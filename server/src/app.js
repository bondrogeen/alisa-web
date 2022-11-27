import express from 'express';
import history from 'connect-history-api-fallback';
import socket from './socket';
import router from './routes/';

const app = express();

function start() {
  try {
    app.use(express.json());
    app.use(express.static('../www'));
    app.use('/api/v1/', router);
    app.use(
      history({
        index: '/index.html',
      })
    );
    app.use(express.static('../www'));
    const server = socket(app);
    server.listen(3001, () => {
      console.log(`Start server, port: 3001`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
