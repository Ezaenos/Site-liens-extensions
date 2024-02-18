const userId = 54401093;
const clientId = 'na3wshqsen8ha9wsj4kj7u8xau1v77';
const token = 'yc5hglx1p1ju5hsrgo6fi07dzpkjc0';

const url = `https://api.twitch.tv/helix/streams?user_id=${userId}`;
const headers = {
    'Authorization': `Bearer ${token}`,
    'Client-ID': clientId
}

const info = document.getElementById('info');

const cb = function (json) {
    info.innerHTML = json.data.length ? "Minnie est en live !" : "Minnie n'est pas là";
}

function fetchTwitchAPI(url, headers, cb) {
    fetch(url, {
        headers: headers
    }).then((response) => {
        return response.json();
    }).then((json) => cb(json));
}

fetchTwitchAPI(url, headers, cb);