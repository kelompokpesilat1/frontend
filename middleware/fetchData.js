export default async function ({ $axios, store }) {
  try {
    const responseCategory = await $axios.$get('/category')

    store.dispatch('setCategories', responseCategory.data)
  } catch (error) {
    console.error('Error fetching category data:', error)
  }
}
