<script>
export default {
  props: ['artikel'],
}
</script>

<template>
  <div>
    <div class="flex items-center gap-4">
      <div
        class="avatar flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-200"
      >
        <h1 class="text-2xl text-red-600 font-bold">{{ avatarName }}</h1>
      </div>
      <div class="div">
        <h1>{{ artikel.author }}</h1>
        <p class="text-gray-400">{{ artikel.date }}</p>
      </div>
    </div>
    <p class="my-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque asperiores
      possimus temporibus corporis quasi libero, repellendus, aperiam maxime
      deserunt optio ipsa dolore, qui debitis error nisi aliquam. Nobis, in
      necessitatibus.
    </p>
    <hr />
  </div>
</template>
