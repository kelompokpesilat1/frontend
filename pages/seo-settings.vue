<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      inputTitle: '',
    }
  },
  computed: {
    ...mapState(['title', 'description']),
  },
  methods: {
    ...mapActions(['setTitle', 'setDescription']),
    updateSettings() {
      // Simpan perubahan ke Vuex store atau lakukan request API untuk menyimpan di backend
      this.setTitle(this.inputTitle)
      console.log(this.title)
    },
  },
}
</script>

<template>
  <div>
    <label for="title">Title:</label>
    <input v-model="inputTitle" id="title" />
    <p>{{ inputTitle }}</p>

    <!-- <label for="description">Description:</label>
    <textarea v-model="description" id="description"></textarea> -->

    <button @click="updateSettings">Simpan</button>
  </div>
</template>
