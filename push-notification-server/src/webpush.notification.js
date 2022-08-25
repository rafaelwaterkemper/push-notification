const webpush = require('web-push') //requiring the web-push module

const vapidKeys = {
    publicKey:
        'BPHDSC7TvdhK6Sm6o_mrhScF9xSghOYDxC10dpfnF9NquBkqSk2UVNmqw0zCby0R2A9dvtW4zTZ4Fa-NgO-v3Zg',
    privateKey: 'htH3zKMjm_i3oWV31EcS4bVvHBYb-U7qlZ7bIMuOhz8',
}
//setting our previously generated VAPID keys
webpush.setVapidDetails(
    'mailto:youremail@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
//function to send the notification to the subscribed device
const sendNotification = (subscription, dataToSend = '') => {
    webpush.sendNotification(subscription, dataToSend)
}

module.exports = { sendNotification }