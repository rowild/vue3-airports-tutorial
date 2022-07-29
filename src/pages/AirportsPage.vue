<template>
  <div class="wrapper">
    <router-link :to="{ name: 'AirportDetail', params: { code: airport.abbreviation.toLowerCase() } }" v-for="airport in airports" :key="airport.abbreviation" class="airport">
      <p>{{ airport.abbreviation }}</p>
      <p>{{ airport.name }}</p>
      <p>{{ airport.city }}, {{ airport.state }}</p>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import allAirports from '@/data/airports.js'

const airports = ref(allAirports)
</script>