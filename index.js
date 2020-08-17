const babel = require("@babel/core");

import Hapi from '@hapi/hapi';
import { route } from './app/routers';

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    route(server);

    await server.start();
    console.log(`Server runnig on ${server.info.uri}`);
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

init();