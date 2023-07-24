<template>
  <div>
    <quill-editor v-model="content" />
    <button @click="showData">Submit</button>
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
    }
  },
  methods: {
    showData() {
      console.log(this.content)
    },
  },
}
</script>
