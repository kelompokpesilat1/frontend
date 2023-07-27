<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['userData']),
  },
}
</script>

<template>
  <div class="flex items-center gap-4 w-full">
    <!-- Avatar Bulat -->
    <h1 class="font-semibold">{{ userData.name }}</h1>
    <div
      class="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden"
    >
      <!-- Isi Avatar (misalnya gambar atau inisial nama) -->
      <img src="@/assets/avatar.jpg" alt="Avatar" width="100%" />
    </div>
  </div>
</template>
