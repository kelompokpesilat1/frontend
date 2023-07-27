export default async function ({ $axios, $auth, store }) {
  const token = $auth.strategy.token.get()
  if (token) {
    try {
      const response = await $axios.$get('/userByAuth', {
        headers: {
          Authorization: `Bearer ${token}`,
          // Add any other headers if needed...
        },
      })
      store.dispatch('setUser', response.data)
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }
}
