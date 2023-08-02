import Vue from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

Vue.use(Toast, {
  position: 'bottom-right', // You can change the position to 'top-left', 'bottom-right', etc.
  timeout: 1000, // The notification will be automatically dismissed after 3 seconds
  closeOnClick: true, // Close the notification when clicked
  pauseOnFocusLoss: true, // Pause the timeout when the window loses focus
  pauseOnHover: false, // Pause the timeout when the notification is hovered
  draggable: false, // Allow the notification to be draggable
  showCloseButton: true, // Show the close button on the notification
})
