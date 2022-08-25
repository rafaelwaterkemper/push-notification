const check = () => {
    if (!('serviceWorker' in navigator)) {
        throw new Error('No Service Worker support!')
    }
    if (!('PushManager' in window)) {
        throw new Error('No Push API Support!')
    }
}

// I added a function that can be used to register a service worker.
const registerServiceWorker = async () => {
    const swRegistration = await navigator.serviceWorker.register('service-worker.js'); //notice the file name
    return swRegistration;
}
const requestNotificationPermission = async () => {
    const permission = await window.Notification.requestPermission();
    // value of permission can be 'granted', 'default', 'denied'
    // granted: user has accepted the request
    // default: user has dismissed the notification permission popup by clicking on x
    // denied: user has denied the request.
    if (permission !== 'granted') {
        throw new Error('Permission not granted for Notification');
    }
}


const main = async () => {
    check();
    const swRegistration = await registerServiceWorker();
    const permission = await requestNotificationPermission();
    console.log(Notification.permission)
    console.log('registering')
}