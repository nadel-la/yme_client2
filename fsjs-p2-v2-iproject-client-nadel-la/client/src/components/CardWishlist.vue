<script>
import { useMainStore } from '../stores/counter'
import { mapActions, mapState } from 'pinia'

export default {
  props: ['wishlist'],
  data() {
    return {
      showData: {}
    }
  },
  methods: {
    ...mapActions(useMainStore, ['removeWishlist']),

    doRemove() {
      this.removeWishlist(this.wishlist.id)
    }
  }
}
</script>

<template>
  <!-- <pre>{{ wishlist }}</pre> -->
  <div
    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex justify-end px-4 pt-4">
      <button
        id="dropdownButton"
        data-dropdown-toggle="dropdown"
        class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
        type="button"
      >
        <span class="sr-only">Open dropdown</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="flex flex-col items-center pb-10">
      <img
        class="w-24 h-24 mb-3 rounded-full shadow-lg"
        :src="wishlist.Mentor.image"
        alt="Bonnie image"
      />
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {{ wishlist.Mentor.name }}
      </h5>
      <span class="text-sm text-gray-500 dark:text-gray-400">{{
        wishlist.Mentor.Category.category
      }}</span>
      <div class="flex mt-4 space-x-3 md:mt-6">
        <a
          href="#"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Book Schedule</a
        >
        <a
          @click="doRemove"
          href="#"
          class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-red-900 bg-white border border-red-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >Remove</a
        >
      </div>
    </div>
  </div>
</template>

<style></style>
