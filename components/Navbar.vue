<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

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
