<template>
  <div>
    <h1>{{ airport.name }} ({{ airport.abbreviation }})</h1>
    <p>Located in {{ airport.city }}, {{ airport.state }}</p>
    <p>showDetails: {{ showDetails }}</p>

    <router-link :to="{ name: 'AirportDestinations'}" v-if="!showDetails" @click.native="handleDestinationView">
      Show destinations (showDetails = {{ showDetails }})
    </router-link>

    <router-link :to="{ name: 'AirportDetail', params: { code: airport.abbreviation.toLowerCase() }}" v-if="showDetails" @click.native="handleDestinationView">
      Hide destinations (showDetails = {{ showDetails }})
    </router-link>

    <router-view />
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onErrorCaptured, onRenderTracked, onRenderTriggered } from 'vue'
import { useRoute } from 'vue-router'
import airports from '@/data/airports.js'
import router from '@/router'

let showDetails = ref(false)

const route = useRoute()

const airport = computed(() => {
  return airports.filter(a => a.abbreviation === route.params.code.toUpperCase())[0]
})

const handleDestinationView = (pointerEvent) => {
  console.log(' ');
  console.log('------------------------');
  console.log('handleDestinationView invoked');
  // showDetails = bool
  console.log('   showDetails.value =', showDetails.value);
  showDetails.value = !showDetails.value
  console.log('   showDetails.value =', showDetails.value);
}

// --- Lifecycle Hooks

onBeforeMount(() => {
  console.log('AirportDetail: onBeforeMounted invoked');

  if (!airport.value) {
    router.push({ name: 'PageNotFound' })
  }
})

onMounted(() => {
  console.log('AirportDetail: onMounted invoked');
})

onBeforeUnmount(() => {
  console.log('AirportDetail: onBeforeUnmount invoked');
})

onUnmounted(() => {
  console.log('AirportDetail: onUnmounted invoked');
})

onBeforeUpdate(() => {
  console.log('AirportDetail: onBeforeUpdate invoked');
})

onUpdated(() => {
  console.log('AirportDetail: onUpdated invoked');
})

onActivated(() => {
  console.log('AirportDetail: onActivated invoked');
})

onDeactivated(() => {
  console.log('AirportDetail: onDeactivated invoked');
})

onErrorCaptured(() => {
  console.log('AirportDetail: onErrorCaptured invoked');
})

onRenderTracked((e) => {
  console.log('AirportDetail: onRenderTracked invoked');
  console.log('  e =', e);
})

onRenderTriggered((what) => {
  console.log('AirportDetail: onRenderTriggered invoked');
  console.log('  what =', what);
})


</script>