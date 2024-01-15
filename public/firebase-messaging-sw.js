importScripts('https://www.gstatic.com/firebasejs/9.19.1/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.19.1/firebase-messaging-compat.js')

const firebaseConfig = {
  apiKey: 'AIzaSyAVf5X5b37ndmIHrMBTVKczvlXgWp0-UNQ',
  projectId: 'benluc-4cbef',
  messagingSenderId: '362148241967',
  appId: '1:362148241967:web:52329b549ee9120f321cda',
}

const app = firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

self.addEventListener('push', function (event) {
  const data = event.data.json()
  event.waitUntil(
    self.registration.showNotification(data.notification.title, {
      body: data.notification.body,
      data: data.data,
    })
  )
})

self.addEventListener('notificationclick', function (event) {
  const notification = event.notification
  let url = ''
  if (notification.data.type === 'service-request-notification') {
    url = `${notification.data.web_url}/orders#${notification.data?.id}`
  } else if (notification.data.type === 'plan-notification') {
    url = `${notification.data.web_url}/plans#${notification.data?.id}`
  } else if (!url) {
    return notification.close()
  }
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(function (clientList) {
      for (let i = 0; i < clientList.length; i++) {
        const client = clientList[i]
        if (client.url === '/' && 'focus' in client) {
          return client.focus()
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(url)
      }
    })
  )
})
