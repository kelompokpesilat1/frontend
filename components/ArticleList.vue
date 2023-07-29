<script>
import { mapState } from 'vuex'
export default {
  props: ['articles'],
  computed: {
    ...mapState(['userData']),
  },
  data() {
    return {
      isModalVisible: false,
      articleIdToDelete: null,
    }
  },
  methods: {
    toggleModal(value) {
      this.isModalVisible = !this.isModalVisible
      this.articleIdToDelete = value
    },
    async deleteArticle() {
      try {
        await this.$axios.delete('/articles/delete/' + this.articleIdToDelete)
        this.$toast.success('Artikel berhasil dihapus')
        // Setelah menghapus artikel, perbarui data this.articles dengan menghapus artikel dari array.
        this.$emit('onDelete')

        // Setelah menghapus artikel, atur kembali nilai articleIdToDelete ke null.
        this.articleIdToDelete = null
      } catch (error) {
        this.$toast.error('Artikel gagal dihapus')
        console.error
      }

      this.isModalVisible = false
    },
  },
}
</script>

<template>
  <div class="w-full min-h-screen overflow-y-scroll">
    <Modal
      :isOpen="isModalVisible"
      :text="'Apakah anda yakin?'"
      @close="toggleModal"
      @confirm="deleteArticle"
    >
    </Modal>
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4">No.</th>
              <th scope="col" class="px-6 py-4">Judul</th>
              <th scope="col" class="px-6 py-4">Konten</th>
              <th scope="col" class="px-6 py-4">Kategori</th>
              <th scope="col" class="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(article, index) in articles"
              :key="article.id"
              class="border-b dark:border-neutral-500"
            >
              <td class="whitespace-nowrap px-6 py-4 font-medium">
                {{ index + 1 }}
              </td>
              <td class="whitespace-nowrap px-6 py-4">
                {{ article.title }}
              </td>
              <td class="whitespace-nowrap px-6 py-4">
                <TruncateContent
                  :articleContent="article.content"
                  :maxWords="5"
                />
              </td>
              <td class="whitespace-nowrap px-6 py-4">
                {{ article.Category.name }}
              </td>
              <td class="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                <button
                  class="btn btn-info"
                  @click="$emit('onEdit', article.id)"
                >
                  Edit
                </button>
                <button class="btn btn-danger" @click="toggleModal(article.id)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
