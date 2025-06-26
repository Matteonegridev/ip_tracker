<script setup>
// import "leaflet/dist/leaflet.css";

import { onMounted, reactive, ref } from "vue";
import L from "leaflet";

// const zoom = ref(2);
const mapContainer = ref(null);
let map = ref();

const coordinates = reactive({
  x: 47.41322,
  y: -1.219482,
});

onMounted(() => {
  map.value = L.map(mapContainer.value).setView([coordinates.x, coordinates.y], 5);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map.value);
});
</script>

<template>
  <div id="map" ref="mapContainer"></div>
</template>

<style lang="css">
#map {
  display: block;
  height: 100vh;
  width: 100%;
}
</style>
