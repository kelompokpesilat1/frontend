<script>
export default {
  props: ['artikel', 'avatarName'],
}
</script>

<template>
  <div>
    <LayoutFlexRow class="gap-4">
      <AvatarName :avatarName="avatarName">
        {{ avatarName }}
      </AvatarName>
      <div>
        <h1>{{ artikel.author }}</h1>
        <p class="text-gray-400">{{ artikel.date }}</p>
      </div>
    </LayoutFlexRow>
    <p class="my-4">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque asperiores
      possimus temporibus corporis quasi libero, repellendus, aperiam maxime
      deserunt optio ipsa dolore, qui debitis error nisi aliquam. Nobis, in
      necessitatibus.
    </p>
    <hr />
  </div>
</template>
