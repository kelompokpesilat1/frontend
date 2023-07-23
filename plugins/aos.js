import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  app.AOS = new AOS.init({
    // Opsi-opsi AOS disini (jika diperlukan)
  })
}
