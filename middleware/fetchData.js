export default async function ({ $axios, store }) {
  try {
    const response = await $axios.$get('/category')

    store.dispatch('setCategories', response.data)
  } catch (error) {
    console.error('Error fetching category data:', error)
  }
}
