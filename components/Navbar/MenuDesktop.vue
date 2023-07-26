<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated']),
    ...mapState(['userData']),
  },
}
</script>

<template>
  <div>
    <div v-if="!isAuthenticated" class="hidden md:flex space-x-4">
      <nuxt-link to="/auth/login">
        <Button label="Login" variant="save" />
      </nuxt-link>
      <nuxt-link to="/auth/register">
        <Button label="Register" variant="primary" text="white" />
      </nuxt-link>
    </div>
    <div v-if="isAuthenticated" class="flex flex-col space-y-4 p-4">
      <nuxt-link
        v-if="userData.id_roles === 1 || userData.id_roles === 2"
        to="/dashboard"
      >
        <Button label="Dashboard" icon="dashboard" text="blue-500" />
      </nuxt-link>
      <Avatar v-if="userData.id_roles === 3" />
      <div @click="$emit('onLogout')">
        <Button label="Logout" icon="logout" text="red-500" />
      </div>
    </div>
  </div>
</template>
