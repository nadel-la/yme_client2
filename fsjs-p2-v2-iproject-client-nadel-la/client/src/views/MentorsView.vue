<script>
import { mapState, mapActions } from 'pinia'
import { useMainStore } from '../stores/counter'
import CardMentor from '../components/CardMentor.vue'

export default {
  computed: {
    ...mapState(useMainStore, ['categories', 'mentors'])
  },
  data() {
    return {
      selectedCategory: null
    }
  },
  components: {
    CardMentor
  },
  methods: {
    ...mapActions(useMainStore, ['fetchCategories', 'fetchMentors']),

    doPagination(event, page) {
      event.preventDefault()
      console.log('Clicked page:', page)
      // this.fetchMentors(page, this.dataInput.search)
    },
    doSelect(id) {
      this.selectedCategory = id
      console.log(id)
    }
  },
  created() {
    this.fetchCategories()
    this.fetchMentors()
  },
  watch: {
    selectedCategory(newVal) {
      this.fetchMentors(1, newVal) // Fetch mentors with the selected category
    }
  }
}
</script>

<template>
  <!-- <pre>{{ selectedCategory }}</pre> -->
  <div class="container grid grid-cols-2 gap-8 mx-auto mt-8 mb-10">
    <div>
      <label for="countries_disabled" class="block mb-2 text-sm text-gray-900 dark:text-white"
        >What do you want to learn?
      </label>
      <select
        v-model="selectedCategory"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option disabled selected>Choose category</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.category }}
        </option>
        <option></option>
      </select>
    </div>
  </div>

  <!-- Tutors -->
  <h1 class="text-black text-5xl mt-2 mb-12 font-bold w my-4 text-center" style="margin-top: 30px">
    Find your perfect mentor!
  </h1>
  <div
    class="container grid grid-cols-3 gap-8 mx-auto mb-10"
    style="margin-right: auto; margin-left: auto"
  >
    <CardMentor v-for="(mentor, index) in mentors" :key="index" :mentor="mentor" />
  </div>
  <!-- END Tutors -->
</template>

<style></style>
