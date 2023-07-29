// plugins/seo.js

export default async ({ app }) => {
  // Lakukan permintaan ke API endpoint untuk mengambil data SEO
  try {
    const response = await app.$axios.get('/seo') // Ganti '/api/seo' dengan URL API endpoint Anda
    const seoData = response.data.data[0] // Data SEO yang diambil dari server
    console.log(seoData)
    // Set data SEO ke dalam head meta pada halaman
    // seoData.forEach((data) => {
    //   app.head.meta.push({
    //     hid: data.hid,
    //     name: data.name,
    //     content: data.content,
    //   })
    // })
  } catch (error) {
    console.error('Error fetching SEO data:', error)
  }
}
