const NotificationHelper = {
  sendNotification({title, options}) {
    // check notification api availability
    if (!this._checkAvailability()) {
      console.log('notification not supported in this browser');
      return;
    }

    // check permission
    if (!this._checkPermission()) {
      console.log('User did not yet granted permission');
      this._requestPermission();
      return;
    }

    // show notification
    this._showNotification({title, options});
  },

  _checkAvailability() {
    return 'Notification' in window;
  },
  _checkPermission() {
    return Notification.permission === 'granted';
  },

  async _requestPermission() {
    const status = await Notification.requestPermission();
    if (status === 'denied') {
      console.log('Permission denied');
    }

    if (status === 'default') {
      console.log('Permission closed');
    }
  },

  async _showNotification({title, options}) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(title, options);
  },
};

export default NotificationHelper;
