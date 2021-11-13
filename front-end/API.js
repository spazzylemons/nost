const SERVER_URL = 'http://127.0.0.1:8000/api/';

function authHeader(auth) {
    return auth ? { 'Authorization': 'JWT ' + auth } : {};
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
        headers: authHeader(auth),
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
        console.log(this.accessToken)
        return await get(`posts/filter/?start_time=${
            encodeURIComponent(startTime.toISOString())
        }&end_time=${
            encodeURIComponent(endTime.toISOString())
        }`, this.accessToken);
    }

    async createAudioPost(type, audio) {
        return await checkedFetch(SERVER_URL + 'posts/create/', {
            method: 'POST',
            headers: {
                'Content-Type': type,
                ...authHeader(this.accessToken),
            },
            body: audio,
        });
    }

    async createTextPost(text) {
        return await checkedFetch(SERVER_URL + 'posts/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
                ...authHeader(this.accessToken),
            },
            body: text,
        });
    }
}

