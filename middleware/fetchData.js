export default async function ({ $axios, store }) {
  try {
    const response = await $axios.$get('/category')
    console.log(response.data)
    store.dispatch('setCategories', response.data)
  } catch (error) {
    console.error('Error fetching category data:', error)
  }
}
