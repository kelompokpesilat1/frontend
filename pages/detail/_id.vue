<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      article: null,
      inputComment: '',
      categoryName: '',
      comments: '',
    }
  },
  async fetch() {
    await this.$axios.get('/articles/' + this.id).then((res) => {
      this.article = res.data.article
      this.categoryName = res.data.category
      this.comments = res.data.comment
      console.log(res.data.article)
      console.log(res.data.comment)
    })
  },
  methods: {
    async postComment() {
      const isAuth = this.$store.$auth.state.loggedIn

      if (!isAuth) {
        this.$router.push('/auth/login')
      }

      const token = this.$auth.strategy.token.get()

      try {
        await this.$axios
          .post('/article/' + this.id + '/comment', {
            headers: {
              Authorization: `Bearer ${token}`,
              // Add any other headers if needed...
            },
            commentar: this.inputComment,
          })
          .then((res) => {
            console.log(res)
            this.comments.push(res.data.data)
          })
      } catch (error) {
        console.log(error)
      }

      this.inputComment = ''
    },
    formatDate(dateString) {
      if (!dateString) return ''
      const date = new Date(dateString)
      const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }
      return date.toLocaleString('id-ID', options)
    },
  },
  computed: {
    coverUrl() {
      return 'http://localhost:8080/' + this.article?.cover
    },
  },
}
</script>

<template>
  <div>
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
          <div>
            <h3 class="font-semibold">{{ article?.author }}</h3>
            <p>{{ formatDate(article?.createdAt) }}</p>
          </div>
        </div>

        <img
          :src="coverUrl"
          alt="Deskripsi Gambar"
          class="w-full object-cover shadow-md"
        />

        <div
          class="flex flex-col gap-6 prose text-lg text-gray-700 leading-[32px]"
          v-html="article?.content"
        ></div>

        <form class="mt-20" @submit.prevent="postComment">
          <textarea
            class="w-full py-4 px-2 border-b"
            placeholder="Tulis Komentar..."
            v-model="inputComment"
          ></textarea>
          <div class="flex justify-end">
            <button class="btn btn-light">
              Kirim <span class="material-icons"> send </span>
            </button>
          </div>
        </form>

        <div v-for="comment in comments" :key="comment.id" class="my-2">
          <div class="flex items-center mb-2">
            <div>
              <p class="font-semibold">
                {{ comment?.User?.name }}
              </p>
              <p class="text-gray-500 text-sm">
                {{ formatDate(comment?.createdAt) }}
              </p>
            </div>
          </div>
          <p class="text-gray-700">
            {{ comment?.commentar }}
          </p>
          <hr class="mt-4" />
        </div>
      </div>
    </client-only>
  </div>
</template>

<style scoped></style>
