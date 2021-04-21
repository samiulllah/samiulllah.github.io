importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");
  var firebaseConfig = {
    apiKey: "AIzaSyBFjLxSHrG9dW92wvpWQxiRKxvASDv9J10",
    authDomain: "quizapp-b14fe.firebaseapp.com",
    projectId: "quizapp-b14fe",
    storageBucket: "quizapp-b14fe.appspot.com",
    messagingSenderId: "189039137349",
    appId: "1:189039137349:web:4c42387c87fbdd6417092c",
    measurementId: "G-BZ5GGFZFW1"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.score
              };
            return registration.showNotification(title, options);
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});