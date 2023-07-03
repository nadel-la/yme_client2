<script>
import { mapActions, mapState } from 'pinia'
import CardWishlist from '../components/CardWishlist.vue'
import { useMainStore } from '../stores/counter'

export default {
  computed: {
    ...mapState(useMainStore, ['wishlists'])
  },
  methods: {
    ...mapActions(useMainStore, ['fetchWishlist'])
  },
  components: {
    CardWishlist
  },
  created() {
    this.fetchWishlist()
  }
}
</script>

<template>
  <!-- <pre>{{ wishlists }}</pre> -->
  <div class="container grid grid-cols-2 gap-8 mx-auto mt-8 mb-10">
    <CardWishlist v-for="wishlist in wishlists" :key="wishlist.id" :wishlist="wishlist" />
  </div>
</template>

<style></style>
