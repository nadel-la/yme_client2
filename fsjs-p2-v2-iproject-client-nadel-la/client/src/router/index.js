import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MentorDetailView from '../views/MentorDetailView.vue'
import FormAppoitment from '../views/FormAppoitment.vue'
import LoginGoogle from '../components/LoginGoogle.vue'
import MentorDetail from '../views/MentorDetailView.vue'
import MentorsView from '../views/MentorsView.vue'
import LoginView from '../views/LoginView.vue'
import Wishlist from '../views/Wishlist.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/booking-mentor',
    name: 'booking-mentor',
    component: FormAppoitment
  },
  {
    path: '/google-login',
    name: 'google-login',
    component: LoginGoogle
  },
  {
    path: '/mentors',
    name: 'mentors',
    component: MentorsView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: Wishlist
  },
  {
    path: '/mentor/:id',
    name: 'mentorDetail',
    component: MentorDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
