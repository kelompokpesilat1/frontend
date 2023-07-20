<script>
export default {
  data() {
    return {
      value: this.$route.params.value,
      lirik: {},
    }
  },
}
</script>

<template>
  <div>
    <Navigation :value="value" />

    <Container>
      <h1>{{ value }}</h1>
    </Container>
  </div>
</template>

<style lang="scss" scoped></style>
