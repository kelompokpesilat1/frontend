<script>
import { mapState } from 'vuex'

export default {
  layout: 'dashboard',
  data() {
    return {
      articles: [],
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
    },
    toggleModal() {
      this.isModalVisible = !this.isModalVisible
    },
    async refreshArticles() {
      await this.$axios.get('/articles').then((res) => {
        this.articles = res.data.data.filter(
          (article) => article.author === this.userData.name
        )
      })
      this.isEdit = false
      this.isCreating = false
    },
  },
  async fetch() {
    await this.$axios.get('/articles').then((res) => {
      this.articles = res.data.data.filter(
        (article) => article.author === this.userData.name
      )
    })
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
    <NewArticle v-show="isCreating" @onPost="refreshArticles" />
    <EditArticle
      v-if="isEdit"
      @onPost="refreshArticles"
      :articleId="editArticleId"
    />
    <ArticleList
      v-show="showList"
      @onDelete="refreshArticles"
      @onEdit="setEditId"
      :articles="articles"
    />
  </div>
</template>
