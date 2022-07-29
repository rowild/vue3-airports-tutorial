<template>
  <div class="bordered">
    <h2>Destinations for {{ airport.name }} ({{ airport.abbreviation }}</h2>
    <h3>Passenger</h3>
    <div class="flex-gap">
      <div v-for="(destination, i) in airport.destinations.passenger" :key="i">
        {{ destination }}
      </div>
    </div>
    <h3>Cargo</h3>
    <div class="flex-gap">
      <div v-for="(destination, i) in airport.destinations.cargo" :key="i">
        {{ destination }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import airports from '@/data/airports.js'

const route = useRoute()
const airport = computed(() => {
  return airports.filter(a => a.abbreviation === route.params.code.toUpperCase())[0]
})
</script>

<style scoped>
.flex-gap {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 12px;
}
.bordered {
  border: 1px solid gray;
  border-radius: 5px;
  padding: 1rem 1rem 2rem 1rem;
  margin-top: 2rem;
}
</style>