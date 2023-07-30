<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      id: this.$route.params.id,
      article: null,
      inputComment: '',
      categoryName: '',
      comments: '',
      commentIdToDelete: null,
    }
  },
  async fetch() {
    await this.$axios.get('/articles/' + this.id).then((res) => {
      this.article = res.data.article
      this.categoryName = res.data.category
      this.comments = res.data.comment
    })
  },
  methods: {
    async postComment() {
      const isAuth = this.$store.$auth.state.loggedIn

      if (!isAuth) {
        this.$router.push('/auth/login')
        return this.$toast.info('Login terlebih dahulu!')
      }

      const token = this.$auth.strategy.token.get()

      try {
        await this.$axios.post('/article/' + this.id + '/comment', {
          headers: {
            Authorization: `Bearer ${token}`,
            // Add any other headers if needed...
          },
          commentar: this.inputComment,
        })
        await this.$axios.get('/articles/' + this.id).then((res) => {
          this.comments = res.data.comment
        })
        this.$toast.success('Berhasil Menambahkan komentar')
      } catch (error) {
        this.$toast.error('Gagal Menambahkan komentar')
      }

      this.inputComment = ''
    },
    async deleteComment(id) {
      const token = this.$auth.strategy.token.get()

      try {
        await this.$axios.delete('/article/comment/' + id, {
          headers: {
            Authorization: `Bearer ${token}`,
            // Add any other headers if needed...
          },
        })
        await this.$axios.get('/articles/' + this.id).then((res) => {
          this.comments = res.data.comment
        })
        this.$toast.success('Berhasil Menghapus komentar')
      } catch (error) {
        this.$toast.error('Gagal Menghapus komentar')
      }
    },
  },
  computed: {
    ...mapState(['userData']),
    coverUrl() {
      if (this.article?.cover) {
        return 'http://localhost:8080/' + this.article?.cover
      }
      return ''
    },
  },
}
</script>

<template>
  <div class="px-8 md:px-16">
    <client-only>
      <div
        class="max-w-3xl mx-auto flex flex-col gap-10 my-10"
        data-aos="flip-right"
        data-aos-duration="1000"
      >
        <div>
          <p class="uppercase font-semibold text-red-600">
            {{ categoryName }}
          </p>
          <h1 class="text-4xl font-bold mb-4 mt-2">
            {{ article?.title }}
          </h1>
          <div
            class="flex items-center justify-between border-t border-b py-2 mt-5"
          >
            <div>
              <h3 class="font-medium">{{ article?.author }}</h3>
              <p class="text-gray-600 text-sm mt-1">
                {{ $utils.formatDate(article?.createdAt) }}
              </p>
            </div>
            <div class="flex items-center gap-2 text-gray-600">
              <span class="material-icons"> visibility </span>
              {{ article?.viewers }}
            </div>
          </div>
        </div>

        <img
          :src="coverUrl"
          alt="Deskripsi Gambar"
          class="w-full object-cover shadow-md"
        />

        <div
          class="text-lg text-gray-700 leading-[32px] py-5"
          v-html="article?.content"
        ></div>

        <form @submit.prevent="postComment">
          <textarea
            class="w-full py-4 px-2 border"
            placeholder="Tulis Komentar..."
            v-model="inputComment"
            required
          ></textarea>
          <div class="flex justify-end">
            <button class="btn btn-light">
              Kirim <span class="material-icons"> send </span>
            </button>
          </div>
        </form>

        <div>
          <div></div>
          <div v-for="comment in comments" :key="comment.id" class="my-2">
            <div class="flex items-center justify-between mb-2">
              <div>
                <p class="font-semibold">
                  {{ comment?.User?.name }}
                </p>
                <p class="text-gray-500 text-sm">
                  {{ $utils.formatDate(comment?.createdAt) }}
                </p>
              </div>
              <button
                class="btn btn-danger"
                v-if="
                  comment.User.name === userData.name &&
                  $store.$auth.state.loggedIn
                "
                @click="deleteComment(comment.id)"
              >
                <span class="material-icons md-18"> delete </span>
              </button>
            </div>
            <p class="text-gray-700">
              {{ comment?.commentar }}
            </p>
            <hr class="mt-4" />
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style scoped></style>
