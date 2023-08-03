<script>
import { mapState, mapGetters } from 'vuex'

export default {
  layout: 'dashboard',
  data() {
    return {
      articles: [],
      isCreating: false,
      isEdit: false,
      showList: true,
      editArticleTitle: '',
      isModalVisible: false,
      searchKeyword: '',
      selectedCategory: '',
      selectedSort: 'latest',
      selectedRole: 'admin',
      selectedStatus: '',
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
    ...mapState(['userData', 'categories']),
    ...mapGetters(['getUserRole']),
    isAdmin() {
      if (this.getUserRole === 'admin') return true
    },
    list() {
      if (this.getUserRole === 'author') {
        return this.articles.filter(
          (article) => article.author === this.userData.name
        )
      }
      return this.articles
    },
    searchResult() {
      if (this.searchKeyword) {
        const keyword = this.searchKeyword.toLowerCase().trim()
        return this.list.filter(
          (article) =>
            article.title.toLowerCase().includes(keyword) ||
            article.author.toLowerCase().includes(keyword) ||
            article.Category.name.toLowerCase().includes(keyword)
        )
      } else {
        // Jika searchKeyword kosong, kembalikan seluruh users
        return this.list
      }
    },
    filteredArticle() {
      let result = this.searchResult

      if (this.selectedCategory) {
        result = result.filter(
          (article) => article.Category.name === this.selectedCategory
        )
      }

      if (this.selectedSort === 'latest') {
        result = result.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      } else if (this.selectedSort === 'oldest') {
        result = result.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        )
      }

      if (this.selectedRole === 'admin') {
        result = result.filter(
          (article) => article.author === this.userData.name
        )
      } else if (this.selectedRole === 'author') {
        result = result.filter(
          (article) => article.author !== this.userData.name
        )
      }

      if (this.selectedStatus === 'publish') {
        result = result.filter((article) => article.publish)
      } else if (this.selectedStatus === 'pending') {
        result = result.filter((article) => !article.publish)
      }

      return result
    },
  },
  methods: {
    toggleCreate() {
      this.isCreating = !this.isCreating
    },
    toggleEdit() {
      this.isEdit = !this.isEdit
    },
    setEditTitle(title) {
      this.isEdit = true
      this.editArticleTitle = title
    },
    toggleModal() {
      this.isModalVisible = !this.isModalVisible
    },
    async refreshArticles() {
      await this.$axios.get('/articles').then((res) => {
        this.articles = res.data.data
      })
      this.isEdit = false
      this.isCreating = false
    },
  },
  async fetch() {
    await this.$axios.get('/articles').then((res) => {
      this.articles = res.data.data
    })
  },
  mounted() {
    console.log(this.articles)
  },
}
</script>

<template>
  <div class="bg-white rounded shadow-sm border m-3">
    <div class="flex items-center justify-between border-b py-2 px-4">
      <div class="flex items-center gap-4 w-2/3">
        <input
          type="text"
          placeholder="Cari artikel..."
          class="w-full py-2 px-4 border rounded"
          v-model="searchKeyword"
        />
        <select v-model="selectedCategory" class="p-2 rounded border">
          <option value="">Semua Kategori</option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.name"
          >
            {{ category.name }}
          </option>
        </select>
        <div>
          <select v-model="selectedSort" class="p-2 rounded border">
            <option value="latest">Terbaru</option>
            <option value="oldest">Terlama</option>
          </select>
        </div>
        <div v-if="isAdmin">
          <select v-model="selectedRole" class="p-2 rounded border">
            <option value="admin">Admin</option>
            <option value="author">Author</option>
          </select>
        </div>
        <div>
          <select v-model="selectedStatus" class="p-2 rounded border">
            <option value="">All status</option>
            <option value="publish">Publish</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      <button v-if="!isCreating" class="btn btn-success" @click="toggleCreate">
        Buat Artikel
        <span class="material-icons-outlined"> add_circle </span>
      </button>
      <button v-else class="btn-circle btn-danger" @click="toggleCreate">
        <span class="material-icons-outlined"> close </span>
      </button>
    </div>
    <NewArticle v-show="isCreating" @onPost="refreshArticles" />
    <div v-if="isEdit" class="flex justify-end m-5">
      <button class="btn btn-danger" @click="toggleEdit">
        <span class="material-icons-outlined"> close </span>
      </button>
    </div>

    <EditArticle
      v-if="isEdit"
      @onPost="refreshArticles"
      :articleTitle="editArticleTitle"
    />
    <ArticleList
      v-show="showList"
      @onDelete="refreshArticles"
      @onEdit="setEditTitle"
      :articles="filteredArticle"
    />
  </div>
</template>
