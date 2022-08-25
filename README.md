# Push Notification

## Push Notification Web

On this project, we have the frontend of our app and also de service-worker that
will listen for push events.
will need generate your VAPID: Voluntary Application Server Identification Keys. 
To accomplish it, you can use the npm package 'web-push' with the following command:

```
web-push generate-vapid-keys
```

### After generate the keys, you must set your public key into the 'service-worker.js' 
### file that will be used to register the serviceWorker within the Push Manager. 

### To run the project as a server, you can use the serve package with npx:

```
npx serve .
```

## Push Notification Server

For the server, we will need the web-push lib to send the messages to the Push
Service from browser and handle the VAPID specification.

```
VAPID: Voluntary Application Server Identification for Web Push is a spec that 
allows a backend server(your application server) to identify itself to the 
Push Service(browser specific service). It is a security measure that prevents 
anyone else from sending messages to an application’s users.
```

Reference: 

(https://medium.com/@a7ul/beginners-guide-to-web-push-notifications-using-service-workers-cb3474a17679)