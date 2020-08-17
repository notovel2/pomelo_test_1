import { get } from '../controllers/githubController';

const route = server => {
    server.route({
        method: 'GET',
        path: '/github',
        handler: get
    })
}

export default route;