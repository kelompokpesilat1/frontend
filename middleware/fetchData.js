export default async function ({ $axios, $auth, store }) {
  try {
    const response = await $axios.$get('/category')
    console.log(response.data.category)
    // store.dispatch('et', response.data)
  } catch (error) {
    console.error('Error fetching category data:', error)
  }
}
