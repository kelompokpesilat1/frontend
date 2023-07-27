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

      const categoriesData = await $axios.$get('/category')

      console.log(categoriesData.data)
      console.log(response.data)
      store.dispatch('setUser', response.data)
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }
}
