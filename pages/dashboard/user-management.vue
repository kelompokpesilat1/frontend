<script>
import { mapState } from 'vuex'

export default {
  layout: 'dashboard',
  middleware: 'author',
  data() {
    return {
      users: [],
      currentUserEdit: {},
    }
  },
  computed: {
    ...mapState(['categories']),
  },
  async fetch() {
    await this.$axios.get('/users').then((res) => (this.users = res.data.data))
  },
  methods: {
    async editUser(id) {
      await this.$axios
        .get('/user/' + id)
        .then((res) => (this.currentUserEdit = res.data.user))
    },
  },
  mounted() {
    console.log(this.users)
    console.log(this.categories)
  },
}
</script>

<template>
  <div>
    <div class="bg-white rounded-xl shadow-sm border p-4 m-3">
      <h1>User Management</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <td>{{ index + 1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.id_roles }}</td>
            <td>
              <button class="btn btn-info" @click="editUser(user.id)">
                Edit</button
              ><button class="btn btn-danger">
                <span class="material-icons-outlined"> delete </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="modal fixed min-h-screen my-10 inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="modal-content bg-white p-9 w-[700px] rounded-md shadow-lg">
          <div class="flex justify-end">
            <nuxt-link to="/">
              <span class="material-icons cursor-pointer">close</span>
            </nuxt-link>
          </div>
          <h2 class="text-[32px] font-bold mb-4">Edit User</h2>
          <!-- <h3 v-if="messageErr !== ''" class="text-red-500 mb-2">
            {{ messageErr }}
          </h3> -->
          <div class="flex flex-col gap-4">
            <div>
              <label for="title">
                <h1 class="text-sm font-semibold mb-2">Nama</h1></label
              >
              <input
                type="text"
                class="w-full border py-2 px-4 bg-white"
                id="title"
                placeholder="Tulis Judul..."
                required
              />
            </div>

            <div>
              <label for="penulis">
                <h1 class="text-sm font-semibold mb-2">Email</h1></label
              >
              <input
                type="text"
                class="w-full border py-2 px-4 bg-white"
                id="title"
                placeholder="Andrea Hirata"
                required
              />
            </div>
            <div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Pilih Kategori</label
              >
              <select
                id="countries"
                class="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option v-for="category in categories" :value="category.id">
                  {{ category.category }}
                </option>
              </select>
            </div>
            <button
              class="py-2 px-4 border-2 w-full text-center bg-red-600 text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- <ListUser /> -->
  </div>
</template>
