<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      id: this.$route.params.id,
      article: null,
      inputComment: '',
      comments: [],
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
  async fetch() {
    await this.$axios.get('/articles/' + this.id).then((res) => {
      this.article = res.data.category
      this.comments = res.data.category.comments
    })
  },
  methods: {
    async postComment({ redirect }) {
      if (!this.isAuthenticated) {
        this.$router.push('/auth/login')
        return
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
          .then((res) => console.log(res))
        this.comments.push(this.inputComment)
        alert('Comment Berhasil Ditambahkan')
      } catch (error) {
        console.log(error)
      }

      this.inputComment = ''
    },
  },
  mounted() {
    console.log(this.article)
  },
}
</script>

<template>
  <div>
    <!-- <Navigation /> -->

    <div
      class="max-w-3xl mx-auto flex flex-col gap-10 my-10"
      data-aos="flip-right"
      data-aos-duration="1000"
    >
      <div>
        <p class="uppercase font-semibold text-red-600">
          {{ article?.category }}
        </p>
        <h1 class="text-4xl font-bold mb-4 mt-2">{{ article?.title }}</h1>
        <div>
          <h3 class="font-semibold">{{ article?.author }}</h3>
          <p>{{ article?.createdAt }}</p>
        </div>
      </div>

      <img
        :src="article?.cover"
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

      <div v-for="comment in article?.comments" class="my-2">
        <div class="flex items-center mb-2">
          <div>
            <!-- <p class="font-semibold">Zulfikar Muhamad</p> -->
            <p class="text-gray-500 text-sm">{{ comment?.createdAt }}</p>
          </div>
        </div>
        <p class="text-gray-700">
          {{ comment?.commentar }}
        </p>
        <hr class="mt-4" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
