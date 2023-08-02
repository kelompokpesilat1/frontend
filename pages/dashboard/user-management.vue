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
      searchKeyword: '',
      selectedRoles: '',
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
    searchResult() {
      if (this.searchKeyword) {
        const keyword = this.searchKeyword.toLowerCase().trim()
        return this.userList.filter((user) =>
          user.name.toLowerCase().includes(keyword)
        )
      } else {
        // Jika searchKeyword kosong, kembalikan seluruh users
        return this.userList
      }
    },
    filteredRoles() {
      if (this.selectedRoles) {
        return this.searchResult.filter(
          (user) => this.getRoleLabel(user.id_roles) === this.selectedRoles
        )
      } else {
        return this.searchResult
      }
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
        this.$toast.danger('User gagal dihapus')
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
    <div class="bg-white rounded shadow-sm border m-3">
      <div class="flex items-center justify-between border-b py-2 px-4 gap-10">
        <div class="flex items-center gap-4 w-2/3">
          <input
            type="text"
            placeholder="Cari user..."
            class="w-1/2 py-2 px-4 border rounded"
            v-model="searchKeyword"
          />
          <select v-model="selectedRoles" class="p-2 rounded border">
            <option value="">Semua Roles</option>
            <option value="user">User</option>
            <option value="author">Author</option>
          </select>
        </div>

        <h1 class="text-lg font-bold">User Management</h1>
      </div>

      <div class="inline-block min-w-full py-2">
        <div class="overflow-y-scroll h-[70vh]">
          <table class="min-w-full text-left text-sm font-light">
            <thead
              class="sticky -z-1 top-0 bg-slate-50 font-medium border-neutral-500"
            >
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
                v-for="(user, index) in filteredRoles"
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
                  <span
                    v-if="user.id_roles == 3"
                    class="p-1 rounded bg-slate-200"
                    >{{ getRoleLabel(user.id_roles) }}</span
                  >
                  <span
                    v-if="user.id_roles == 2"
                    class="p-1 rounded bg-green-200"
                    >{{ getRoleLabel(user.id_roles) }}</span
                  >
                </td>
                <td class="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                  <button class="btn btn-info" @click="openModalEdit(user.id)">
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
