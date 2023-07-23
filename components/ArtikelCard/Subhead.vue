<script>
export default {
  props: ['date', 'kategori'],
}
</script>

<template>
  <div>
    <LayoutFlexRow class="artikel-subtitle text-gray gap-3 mb-3">
      <p class="text-sm">
        {{ date }}
      </p>
      <nuxt-link :to="`/kategori/${kategori}`">
        <p
          class="py-1 px-2 rounded-full bg-gray-100 text-sm text-red-600 cursor-pointer"
        >
          {{ kategori }}
        </p></nuxt-link
      >
    </LayoutFlexRow>
  </div>
</template>
