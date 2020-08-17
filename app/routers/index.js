import { transformTree } from "../controllers/nodeController"
import githubRouter from './github';

export const route = server => {
    server.route({
        method: 'POST',
        path: '/',
        handler: transformTree
    })

    githubRouter(server);
}