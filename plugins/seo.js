// plugins/seo.js

export default async ({ app, store }) => {
  // Lakukan permintaan ke API endpoint untuk mengambil data SEO
  try {
    const response = await app.$axios.get('/seo') // Ganti '/api/seo' dengan URL API endpoint Anda
    const seoData = response.data.data[0] // Data SEO yang diambil dari server

    store.dispatch('setSeo', seoData)
  } catch (error) {
    console.error('Error fetching SEO data:', error)
  }
}
