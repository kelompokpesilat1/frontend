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
      articleNameToDelete: '',
    }
  },
  methods: {
    toggleModal(title) {
      this.isModalVisible = !this.isModalVisible
      this.articleNameToDelete = title
    },
    async deleteArticle() {
      try {
        const encodedTitle = encodeURIComponent(this.articleNameToDelete)
        await this.$axios.delete('/articles/delete/' + encodedTitle)
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
  <div class="w-full">
    <Modal
      :isOpen="isModalVisible"
      :text="'Apakah anda yakin?'"
      @close="toggleModal"
      @confirm="deleteArticle"
    >
    </Modal>
    <div v-if="articles.length > 0" class="inline-block min-w-full py-2">
      <div class="overflow-y-scroll h-[70vh]">
        <table class="min-w-full text-left text-sm font-light">
          <thead
            class="sticky -z-1 top-0 bg-slate-50 font-medium border-neutral-500"
          >
            <tr>
              <th scope="col" class="px-6 py-4">No.</th>
              <th scope="col" class="px-6 py-4">Judul</th>
              <th scope="col" class="px-6 py-4">Dibuat</th>
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
                <TruncateContent
                  :articleContent="article.title"
                  :maxWords="4"
                />
              </td>
              <td class="whitespace-nowrap px-6 py-4">
                {{ $utils.formatDateShort(article.createdAt) }}
                <!-- <TruncateContent
                  :articleContent="article.content"
                  :maxWords="4"
                /> -->
              </td>
              <td class="whitespace-nowrap px-6 py-4">
                {{ article.Category.name }}
              </td>
              <td class="whitespace-nowrap px-6 py-4 flex items-center gap-2">
                <button
                  class="btn btn-info"
                  @click="$emit('onEdit', article.title)"
                >
                  Edit
                </button>
                <button
                  class="btn btn-danger"
                  @click="toggleModal(article.title)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else class="text-center">
      <h1 class="text-lg">Tidak ada artikel</h1>
    </div>
  </div>
</template>
