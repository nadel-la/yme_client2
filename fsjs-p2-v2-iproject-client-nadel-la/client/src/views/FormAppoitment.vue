<script>
import axios from 'axios'
import { mapActions } from 'pinia'
import { useMainStore } from '../stores/counter'
export default {
  data() {
    return {
      dataInput: {
        eventTitle: 'Set schedule with mentor Lisa',
        phoneNumber: ``,
        date: null,
        startTime: '',
        city: null,
        postalCode: null
      }
    }
  },
  methods: {
    ...mapActions(useMainStore, ['createEvent']),

    doSendForm() {
      this.createEvent(this.dataInput)
    }
  }
}
</script>

<template>
  <div class="flex items-center justify-center p-12">
    <!-- Author: FormBold Team -->
    <div class="mx-auto w-full max-w-[550px] bg-white">
      <form @submit.prevent="doSendForm">
        <div class="mb-5">
          <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
            Event Title
          </label>
          <input
            v-model="dataInput.eventTitle"
            type="text"
            name="eventTitle"
            id="eventTitle"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
            Phone Number
          </label>
          <input
            v-model="dataInput.phoneNumber"
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                Date
              </label>
              <input
                v-model="dataInput.date"
                type="date"
                name="date"
                id="date"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="time" class="mb-3 block text-base font-medium text-[#07074D]">
                Time
              </label>
              <input
                v-model="dataInput.startTime"
                type="time"
                name="startTime"
                id="startTime"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>

        <div class="mb-5 pt-3">
          <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
            Address Details
          </label>
          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <input
                  v-model="dataInput.city"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="Enter city"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
              <div class="mb-5">
                <input
                  v-model="dataInput.postalCode"
                  type="text"
                  name="post-code"
                  id="post-code"
                  placeholder="Post Code"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            class="hover:shadow-form w-full rounded-md bg-[#000000] py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>
