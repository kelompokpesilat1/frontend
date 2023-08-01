export default (context, inject) => {
  const myMethods = {
    formatDate(dateString) {
      const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short',
      }

      const date = new Date(dateString)
      return date.toLocaleString('id-ID', options)
    },

    formatDateShort(dateString) {
      const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }

      const date = new Date(dateString)
      return date.toLocaleString('id-ID', options)
    },
    // tambahkan metode reusable lainnya di sini...
  }

  inject('utils', myMethods)
}
