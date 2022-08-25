const express = require('express')
const cors = require('cors')
const { sendNotification } = require('./webpush.notification')

const app = express()
app.use(cors())
app.use(express.json())

const subscriptions = [];

app.post('/subscriptions', (req, res) => {
    const subscription = req.body
    subscriptions.push(subscription)
    res.status(204)
})

app.get('/subscriptions', (req, res) => {
    res.send(subscriptions)
})

//route to test send notification
app.get('/notifications/send', (req, res) => {
    const subscription = subscriptions.at(0) //get subscription from your databse here.
    const message = 'Hello World'
    sendNotification(subscription, message)
    res.json({ message: 'message sent' })
})

app.listen(4000, () => console.log('running'))