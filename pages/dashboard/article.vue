<script>
import { mapState } from 'vuex'

export default {
  layout: 'dashboard',
  data() {
    return {
      isCreating: false,
      isEdit: false,
      showList: true,
      editArticleId: 0,
      isModalVisible: false,
    }
  },
  watch: {
    isCreating(newValue) {
      this.showList = !newValue && !this.isEdit
    },
    isEdit(newValue) {
      this.showList = !newValue && !this.isCreating
    },
  },
  computed: {
    ...mapState(['userData']),
  },
  methods: {
    toggleCreate() {
      this.isCreating = !this.isCreating
    },
    toggleEdit() {
      this.isEdit = !this.isEdit
    },
    setEditId(value) {
      this.isEdit = true
      this.editArticleId = value
      console.log(this.editArticleId)
    },
    toggleModal() {
      this.isModalVisible = !this.isModalVisible
    },
  },
  mounted() {
    console.log(this.postArtikel)
  },
}
</script>

<template>
  <div class="bg-white rounded-xl shadow-sm border m-3">
    <div class="flex items-center justify-end border-b p-4">
      <button v-if="!isCreating" class="btn btn-success" @click="toggleCreate">
        Buat Artikel
        <span class="material-icons-outlined"> add_circle </span>
      </button>
      <button v-else class="btn-circle btn-danger" @click="toggleCreate">
        <span class="material-icons-outlined"> close </span>
      </button>
      <button v-if="isEdit" class="btn btn-success" @click="toggleEdit">
        <span class="material-icons-outlined"> close </span>
      </button>
    </div>
    <NewArticle v-show="isCreating" />
    <EditArticle v-if="isEdit" :articleId="editArticleId" />
    <ArticleList v-show="showList" @onEdit="setEditId" />
  </div>
</template>
