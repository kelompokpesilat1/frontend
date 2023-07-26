export default async function ({ $auth }) {
  // Mendapatkan token dari Nuxt Auth
  const token = this.$auth.strategy.token.get()

  if (!token) {
    // Redirect ke halaman login jika token tidak ada
    this.$router.push('/auth/login') // Ganti URL sesuai dengan halaman login Anda
    return
  }

  console.log(token)
}
