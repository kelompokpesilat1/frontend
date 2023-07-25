export default function ({ store, redirect }) {
  // Periksa apakah peran pengguna bukan admin
  if (!store.state.user.auth) {
    // Redirect ke halaman lain (misalnya halaman login)
    return redirect('/')
  }
}
