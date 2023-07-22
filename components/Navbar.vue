<template>
  <nav class="bg-[#26282A] h-[75px]">
    <Container>
      <LayoutFlexRow class="justify-between h-full relative">
        <NavbarLogo />
        <NavbarLinks />
        <NavbarButtons />
      </LayoutFlexRow>
    </Container>
  </nav>
</template>

<style scoped>
.nuxt-link-active {
  @apply text-red-600;
}
</style>
