const userId = 54401093;
const clientId = 'na3wshqsen8ha9wsj4kj7u8xau1v77';
let token = 'yc5hglx1p1ju5hsrgo6fi07dzpkjc0';

const url = `https://api.twitch.tv/helix/streams?user_id=${userId}`;
const twitchUrl = "https://www.twitch.tv/pentiminaxdev";
let headers = {
    'Authorization': `Bearer ${token}`,
    'Client-ID': clientId
}

let isLiveOn = false;
let retryCount = 0;

const cb = function (json) {
    if (json.data.length) {
        setIcon('images/live_on.png');
        isLiveOn = true;
        retryCount = 0;
    } else {
        setIcon('images/live_off.png');
        isLiveOn = false;
        retryCount = 0;
    }
}

function fetchTwitchAPI(url, headers, cb) {
    fetch(url, {
        headers: headers
    }).then((response) => {
        return response.json();
    }).then((json) => cb(json));
}

function setIcon(path) {
    chrome.action.setIcon({ path: path });
}

fetchTwitchAPI(url, headers, cb);

chrome.notifications.onClicked.addListener(() => {
    chrome.tabs.create({
        url: twitchUrl
    })
});

chrome.alarms.create({ periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener(() => {
    fetchTwitchAPI(url, headers, cb);
});