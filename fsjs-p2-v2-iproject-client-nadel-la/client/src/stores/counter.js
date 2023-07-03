import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const baseUrl = `https://unarmed-wheel-production.up.railway.app/api`
export const useMainStore = defineStore('main', {
  state: () => {
    return {
      categories: null,
      mentors: [],
      mentor: null,
      isLogin: false,
      wishlists: null
    }
  },
  actions: {
    async createEvent(dataInput) {
      try {
        const token = localStorage.getItem('access_token')
        let { data } = await axios({
          method: 'post',
          url: `https://unarmed-wheel-production.up.railway.app/api/create-event`,
          headers: {
            access_token: token
          },
          data: {
            dataInput
          }
        })
      } catch (error) {
        console.log(error)
        this.$toast.error(error.response.data.message)
      }
    },
    async payment(price) {
      try {
        let { data } = await axios({
          method: 'post',
          url: `https://unarmed-wheel-production.up.railway.app/api/generateMidtransToken`,
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: {
            price: price
          }
        })
        console.log(data)

        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* You may add your own implementation here */
            alert('payment success!')
            console.log(result)
          }
          // onError: function (result) {
          //   /* You may add your own implementation here */
          //   alert('payment failed!')
          //   console.log(result)
          // }
        })
        //   onPending: function (result) {
        //     /* You may add your own implementation here */
        //     alert('wating your payment!')
        //     console.log(result)
        //   },

        //   onClose: function () {
        //     /* You may add your own implementation here */
        //     alert('you closed the popup without finishing the payment')
        //   }
        // })
      } catch (error) {
        // this.$toast.error(error, 'Please sign in')
        console.log(error)
      }
    },
    async fetchCategories() {
      try {
        let { data } = await axios({
          method: 'get',
          url: `${baseUrl}/categories`
        })
        console.log(data)
        this.categories = data
      } catch (error) {
        console.log(error)
      }
    },
    async fetchMentors(page = 1, categoryId) {
      try {
        // console.log(search, 'dari stores')
        const { data } = await axios({
          method: 'GET',
          url: `${baseUrl}/mentors`,
          params: {
            page: +page,
            categoryId
          }
        })
        this.mentors = data.rows
        console.log(data, 'mentors dari stores')
        // console.log(data)
      } catch (error) {
        // this.$toast.error(error.response.data.message)
        // this.$toast.error(error.response.data.message)
        console.log('Error during fetch data:', error.response.data.message)
      }
    },
    async getId(mentor) {
      console.log(mentor)
      this.mentor = mentor
      localStorage.setItem('mentor', JSON.stringify(mentor))
      this.router.push(`/mentor/${mentor.id}`)
    },
    async addWishlist(id) {
      try {
        const { data } = await axios({
          method: 'post',
          url: `${baseUrl}/wishlist/${id}`,
          headers: {
            access_token: localStorage.access_token
          }
        })
        // console.log('Got an ID', id)
        this.isLogin = true
        this.router.push('/wishlist')
        this.$toast.success('Added to your wishlist!')
      } catch (error) {
        this.$toast.error(error.response.data.message, 'Please sign in')
        console.log('Error during add wishlist:', error.response.data.message)
        // console.log(error)
      }
    },
    async fetchWishlist() {
      try {
        let { data } = await axios({
          method: 'get',
          url: `${baseUrl}/wishlist`,
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.wishlists = data
        console.log(data, 'wishlist')
      } catch (error) {
        console.log('Error during fetch wishlist:', error.response.data.message)
        this.$toast.error(error.response.data.message)
      }
    },
    async login(email, password) {
      try {
        let { data } = await axios({
          method: 'post',
          url: `${baseUrl}/login`,
          data: {
            email,
            password
          }
        })
        // console.log(data.access_token)
        localStorage.setItem('isLogin', 'true')
        localStorage.setItem('access_token', data.access_token)
        this.isLogin = true
        // this.$toast.success('Login berhasil!')
        this.router.push('/')
        this.$toast.success('Login successfully')
      } catch (error) {
        this.$toast.error(error.response.data.message)
        console.log('Error during login:', error.response.data.message)
      }
    },
    async removeWishlist(id) {
      try {
        let { data } = await axios({
          url: `${baseUrl}/wishlist/${id}`,
          method: 'delete',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        console.log(data)
        this.$toast.success(data.message)
        this.fetchWishlist()
        this.router.push('/wishlist')
      } catch (error) {
        this.$toast.error(error.response.data.message)
        console.log(error)
      }
    },
    async callback(response) {
      this.googleLog = response
      console.log('Handle the response', response)
      try {
        const { data } = await axios({
          url: `${baseUrl}/google-login`,
          method: 'POST',
          headers: {
            googleToken: response.credential
          }
        })
        console.log(data, 'google login response')
        localStorage.setItem('isLogin', 'true')
        localStorage.setItem('access_token', data.access_token)
        this.isLogin = true
        this.router.push('/')
        this.$toast.success('Login Successfully!')
      } catch (jqXHR) {
        console.log(jqXHR.responseJSON)
        this.$toast.error(error.response.data.message)
      }
    }
  }
})
