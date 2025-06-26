<script setup>
import { onMounted, reactive, ref } from "vue";
import L from "leaflet";

const mapContainer = ref();
let map = ref();
const coordinates = reactive({
  x: 51.505,
  y: -0.09,
});
const zoom = ref(5);

L.Control.include({
  _refocusOnMap: L.Util.falseFn, // Do nothing.
});

onMounted(() => {
  map.value = L.map(mapContainer.value).setView([coordinates.x, coordinates.y], zoom.value);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map.value);
  L.Control.include({
    _refocusOnMap: L.Util.falseFn, // Do nothing.
  });
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
@media screen and(min-width: 768px) {
  #map {
    height: 80vh;
  }
}
</style>
