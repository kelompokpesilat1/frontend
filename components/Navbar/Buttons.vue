<script>
export default {
  data() {
    return {
      auth: true,
    }
  },
}
</script>

<template>
  <div>
    <ul v-if="!auth" class="flex item-center gap-3">
      <li>
        <nuxt-link to="/auth/register">
          <Button label="Register" variant="primary" />
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/auth/login">
          <Button label="Login" variant="success" />
        </nuxt-link>
      </li>
    </ul>

    <ul v-else class="flex item-center gap-3">
      <li>
        <nuxt-link to="/dashboard">
          <Button label="Dashboard" variant="secondary" icon="dashboard" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
