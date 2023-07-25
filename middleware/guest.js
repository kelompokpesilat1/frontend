// middleware/admin-auth.js
export default function ({ store, redirect }) {
  // Periksa apakah peran pengguna bukan admin
  if (!store.state.user.auth) {
    return redirect('/')
  }

  if (store.state.user.role !== 'admin') {
    // Redirect ke halaman lain (misalnya halaman login)
    return redirect('/login')
  }
}
