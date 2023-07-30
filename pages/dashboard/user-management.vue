<script>
import { mapState } from 'vuex'

export default {
  layout: 'dashboard',
  middleware: 'author',
  data() {
    return {
      users: [],
      currentUserEditId: 1,
      userIdToDelete: null,
      setRoles: 1,
      modalEditOpen: false,
      modalDeleteOpen: false,
    }
  },
  computed: {
    ...mapState(['userData']),
    currentUserEdit() {
      return this.users.find((user) => user.id === this.currentUserEditId)
    },
    userList() {
      return this.users.filter((user) => user.id !== this.userData.id)
    },
  },
  methods: {
    getRoleLabel(idRoles) {
      // Membuat objek yang memetakan id_roles ke label yang sesuai
      const roleMap = {
        1: 'admin',
        2: 'author',
        3: 'user',
      }

      // Mengembalikan label berdasarkan nilai id_roles dari objek roleMap
      return roleMap[idRoles] || 'Unknown Role'
    },
    openModalEdit(id) {
      this.modalEditOpen = !this.modalEditOpen
      this.currentUserEditId = id
      this.setRoles = this.currentUserEdit.id_roles
    },
    openModalDelete(id) {
      this.modalDeleteOpen = !this.modalDeleteOpen
      this.userIdToDelete = id
    },
    async setUserRoles() {
      try {
        const token = this.$auth.strategy.token.get()
        const response = await this.$axios.put(
          '/user/editAdmin/' + this.currentUserEditId,
          { id_roles: this.setRoles },
          {
            headers: {
              Authorization: 'Bearer' + token,
            },
          }
        )
        this.modalEditOpen = false

        // Cari index user yang akan diubah
        const userIndex = this.users.findIndex(
          (user) => user.id === this.currentUserEditId
        )

        // Update data user di client-side
        if (userIndex !== -1) {
          this.$set(this.users, userIndex, {
            ...this.users[userIndex],
            id_roles: this.setRoles,
          })
        }
        this.$toast.success('User berhasil diedit')
      } catch (error) {
        this.$toast.success('User gagal diedit')
      }
    },
    async deleteUser() {
      try {
        const token = this.$auth.strategy.token.get()
        const response = await this.$axios.delete(
          '/user/deleteAdmin/' + this.userIdToDelete,
          {
            headers: {
              Authorization: 'Bearer' + token,
            },
          }
        )
        this.modalDeleteOpen = false

        // Cari index user yang akan dihapus
        const userIndex = this.users.findIndex(
          (user) => user.id === this.userIdToDelete
        )

        // Hapus data user di client-side
        if (userIndex !== -1) {
          this.users.splice(userIndex, 1)
        }
        this.$toast.success('User berhasil dihapus')
      } catch (error) {
        this.$toast.success('User gagal dihapus')
      }
    },
  },
  async fetch() {
    await this.$axios.get('/users').then((res) => {
      this.users = res.data.data
    })
  },
  mounted() {},
}
</script>

<template>
  <div>
    <div class="bg-white rounded-xl shadow-sm border p-4 m-3">
      <h1>User Management</h1>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">No.</th>
                    <th scope="col" class="px-6 py-4">Nama</th>
                    <th scope="col" class="px-6 py-4">Email</th>
                    <th scope="col" class="px-6 py-4">Role</th>
                    <th scope="col" class="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(user, index) in userList"
                    :key="user.id"
                    class="border-b dark:border-neutral-500"
                  >
                    <td class="whitespace-nowrap px-6 py-4 font-medium">
                      {{ index + 1 }}
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">{{ user.name }}</td>
                    <td class="whitespace-nowrap px-6 py-4">
                      {{ user.email }}
                    </td>
                    <td class="whitespace-nowrap px-6 py-4">
                      {{ getRoleLabel(user.id_roles) }}
                    </td>
                    <td
                      class="whitespace-nowrap px-6 py-4 flex items-center gap-2"
                    >
                      <button
                        class="btn btn-info"
                        @click="openModalEdit(user.id)"
                      >
                        Edit
                      </button>
                      <button
                        class="btn btn-danger"
                        @click="openModalDelete(user.id)"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div
        v-show="modalEditOpen"
        class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="modal-content bg-white p-9 w-[700px] rounded-md shadow-lg">
          <div class="flex items-center justify-between mb-10">
            <h1 class="text-2xl font-bold">Edit Roles</h1>
            <span
              class="material-icons cursor-pointer"
              @click="modalEditOpen = !modalEditOpen"
              >close</span
            >
          </div>

          <div class="flex items-center justify-between mb-5">
            <h1 class="text-lg font-bold">{{ currentUserEdit?.name }}</h1>
            <div class="flex items-center gap-3">
              <select
                id="kategori"
                class="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                v-model="setRoles"
              >
                <option value="1">Admin</option>
                <option value="2">Author</option>
                <option value="3">User</option>
              </select>
            </div>
          </div>
          <button @click="setUserRoles" class="btn btn-dark w-full">
            Edit
          </button>
        </div>
      </div>
      <div
        v-show="modalDeleteOpen"
        class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div
          class="modal-content bg-white py-6 px-4 max-w-lg rounded-md shadow-lg"
        >
          <div class="text-end">
            <span
              class="material-icons cursor-pointer"
              @click="modalDeleteOpen = !modalDeleteOpen"
              >close</span
            >
          </div>
          <div class="flex items-center justify-between mb-10">
            <h1 class="text-lg font-bold">
              Apakah anda yakin ingin menghapus user?
            </h1>
          </div>

          <div class="flex items-center gap-5 justify-between">
            <button @click="deleteUser" class="btn btn-dark w-1/2">
              Hapus
            </button>
            <button
              @click="modalDeleteOpen = !modalDeleteOpen"
              class="btn btn-danger w-1/2"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
