<script>
import { dummyArtikel } from '@/utils/dummyData'

export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    artikel() {
      return dummyArtikel.find((value) => value.id === this.id)
    },
  },
}
</script>

<template>
  <div>
    <Navigation />

    <Container>
      <!-- <h1>{{ artikel.title }}</h1> -->
      <div class="mx-[240px] flex flex-col gap-[50px]">
        <div class="mx-[42px]">
          <p class="text-red-500 font-semibold">Edukasi</p>
          <p class="text-[36px] font-bold w-full leading-none">
            Kenapa Anda Harus Belajar Coding ?
          </p>
          <section class="flex gap-[14px] items-center mt-[25px]">
            <div class="w-[50px] h-[50px] rounded-full bg-[#d9d9d9]"></div>
            <div>
              <p>zulfikar</p>
              <p>1213wddfsdfds</p>
            </div>
          </section>
        </div>
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80"
          class="w-full h-[533px] object-cover"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          ipsum, assumenda aut eum excepturi cumque temporibus ea. Est mollitia
          non, itaque, voluptates aperiam labore exercitationem alias voluptas
          doloremque commodi ullam.
        </p>
        <div class="flex flex-col gap-[20px]">
          <div
            class="flex gap-[14px] items-center rounded-md bg-[#f2f2f2] shadow-md shadow-black-500/25 p-[20px]"
          >
            <span class="material-icons-outlined"> remove_red_eye </span>
            <p class="text-[20px]"><span class="mr-2">10</span>dilihat</p>
          </div>
          <div
            class="flex gap-[14px] items-center rounded-md bg-[#f2f2f2] shadow-md shadow-black-500/25 p-[20px] flex-col"
          >
            <input
              type="text"
              placeholder="masukan komentar"
              class="border-solid border border-black w-full p-[14px] rounded-md"
            />
            <div class="flex justify-end gap-[20px] w-full">
              <button class="text-red-500">Batal</button>
              <button>Kirim</button>
            </div>
          </div>
          <div
            class="flex gap-[14px] rounded-md bg-[#f2f2f2] shadow-md shadow-black-500/25 p-[20px] flex-col"
          >
            <div class="flex gap-[14px] items-center">
              <span class="material-icons-outlined"> remove_red_eye </span>
              <p class="text-[20px]"><span class="mr-2">10</span>komentar</p>
            </div>
            <div>
              <section class="flex gap-[14px] items-center mt-[22px]">
                <div class="w-[50px] h-[50px] rounded-full bg-[#d9d9d9]"></div>
                <div>
                  <p>zulfikar</p>
                  <p>1213wddfsdfds</p>
                </div>
              </section>
              <p class="mt-[10px] mb-[10px]">SLOT ADMIN TOP CER</p>
              <div class="border-[1px] border-black w-full order-1 mt-1" />
            </div>
            <div>
              <section class="flex gap-[14px] items-center mt-[22px]">
                <div class="w-[50px] h-[50px] rounded-full bg-[#d9d9d9]"></div>
                <div>
                  <p>zulfikar</p>
                  <p>1213wddfsdfds</p>
                </div>
              </section>
              <p class="mt-[10px] mb-[10px]">SLOT ADMIN TOP CER</p>
              <div class="border-[1px] border-black w-full order-1 mt-1" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<style scoped></style>
