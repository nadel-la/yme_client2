<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { mapState } from 'pinia'
import { useMainStore } from './stores/counter'

export default {
  components: {
    Navbar
  },
  computed: {
    ...mapState(useMainStore, ['isLogin'])
  }
}
</script>

<template>
  <Navbar />

  <RouterView />
</template>

<style></style>
