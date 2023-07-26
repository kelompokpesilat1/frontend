// middleware/admin-auth.js
export default function ({ store, redirect }) {
  // Periksa apakah peran pengguna bukan admi

  if (store.state.userData.id_roles === 2) {
    // Redirect ke halaman lain (misalnya halaman login)
    return redirect('/')
  }
}
