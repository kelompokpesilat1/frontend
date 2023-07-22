<script setup></script>

<template>
  <div
    class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="modal-content bg-white p-9 w-[700px] rounded-md shadow-lg">
      <div class="flex justify-end">
        <a href="#"><span class="material-icons">close</span></a>
      </div>
      <h2 class="text-[32px] font-bold mb-4">Masuk dulu gais</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <input
            type="email"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-400"
            required
            placeholder="Email"
          />
        </div>
        <div class="mb-4">
          <input
            type="password"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-400"
            required
            placeholder="Password"
          />
        </div>
        <div class="flex justify-between">
          <a class="text-blue-700" href="#">Belum punya akun ?</a>
          <button type="submit" class="text-black font-bold px-4 py-2 rounded">
            Masuk
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
