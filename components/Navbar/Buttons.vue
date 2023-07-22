<script>
export default {
  data() {
    return {
      auth: false,
    }
  },
}
</script>

<template>
  <div>
    <ul v-if="!auth" class="flex item-center gap-3">
      <li>
        <nuxt-link to="/auth/register" @click="toggleDropdown">
          <Button label="Register" variant="primary" />
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/auth/login" @click="toggleDropdown">
          <Button label="Login" variant="success" />
        </nuxt-link>
      </li>
    </ul>

    <ul v-else class="flex item-center gap-3">
      <li>
        <nuxt-link to="/auth/register" @click="toggleDropdown">
          <Button label="Dashboard" variant="secondary" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
