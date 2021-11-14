const SERVER_URL = 'http://127.0.0.1:8000/api/';

function authHeader(auth) {
    return auth ? { 'Authentication': 'JWT ' + auth } : {};
}

async function checkedFetch(...args) {
    const res = await fetch(...args);
    if (res.status > 299) {
        throw `HTTP status ${res.status}: '${res.statusText}'`
    }
    return await res.json();
}

async function get(path, auth) {
    return await checkedFetch(SERVER_URL + path, {
        method: 'GET',
        ...authHeader(auth),
    });
}

async function post(path, body, auth) {
    return await checkedFetch(SERVER_URL + path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...authHeader(auth),
        },
        body: JSON.stringify(body),
    });
}

export default class API {
    static async create(username, password) {
        const tokens = await post('token/obtain/', { username, password });
        const api = new API;
        api.accessToken = tokens.access;
        api.refreshToken = tokens.refresh;
        return api;
    }

    static async createUser(email, username, password) {
        await post('user/create/', { email, username, password });
    }

    async refresh() {
        const tokens = await post('token/refresh/', {
            refresh: this.refreshToken,
        });
        this.accessToken = tokens.access;
        this.refreshToken = tokens.refresh;
    }

    async filterPosts(startTime, endTime) {
        return await get(`posts/filter/?start_time=${
            encodeURIComponent(startTime)
        }&end_time=${
            encodeURIComponent(endTime)
        }`, this.accessToken);
    }

    async createAudioPost(audio) {
        return await post('posts/create/', { audio }, this.accessToken);
    }

    async createTextPost(text) {
        return await post('posts/create/', { text }, this.accessToken);
    }
}
