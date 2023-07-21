<script setup></script>

<template>
  <div
    class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="modal-content bg-white p-9 w-[700px] rounded-md shadow-lg">
      <div class="flex justify-end mb-2">
        <span class="material-icons">close</span>
      </div>
      <h2 class="text-[32px] font-bold mb-4">Register</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <input
            type="text"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
            placeholder="Username"
          />
        </div>
        <div class="mb-4">
          <input
            type="email"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
            placeholder="Email"
          />
        </div>
        <div class="mb-4">
          <input
            type="password"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
            placeholder="Password"
          />
        </div>
        <div class="mb-4">
          <input
            type="password"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
            placeholder="Konfigurasi Password"
          />
        </div>
        <div class="flex justify-between">
          <a class="text-blue-700" href="#">Sudah punya akun ?</a>
          <button type="submit" class="text-black font-bold px-4 py-2 rounded">
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
