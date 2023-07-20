<script setup>
import { dummyArtikel } from '../utils/dummyData'
</script>

<template>
  <div>
    <Container />
    <Navigation />

    <section class="flex justify-center mt-5">
      <div class="flex flex-col">
        <h1 class="text-4xl w-[39.75rem] mt-2">
          Kenapa Kamu Harus Belajar Coding ?
        </h1>
        <div class="flex justify-start w-[50%] bg-gray-200 mt-5 rounded-md p-2">
          <img
            class="w-[50px] h-[50px] rounded-full"
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80"
          />
          <div class="flex flex-col px-3 text-sm">
            <p>Zulfikar</p>
            <p>January 18 2023 18: WIB</p>
          </div>
        </div>
        <div class="mt-5">
          <img
            class="h-[80%]"
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80"
          />
        </div>
      </div>
    </section>
  </div>
</template>
