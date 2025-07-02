<script setup>
import { computed, onMounted, ref, watch } from "vue";
import L from "leaflet";

const map = ref();
const marker = ref();
const mapContainer = ref();
let zoom = ref(13);

// define props:
const props = defineProps(["ipData"]);

// prevent the map to go full screen:
L.Control.include({
  _refocusOnMap: L.Util.falseFn,
});

onMounted(() => {
  map.value = L.map(mapContainer.value).setView([51.505, -0.09], zoom.value);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map.value);
  marker.value = L.marker([51.505, -0.09]).addTo(map.value);
});

// watch ipData for changes:
watch(
  () => props.ipData,
  async (newIpData) => {
    if (newIpData?.lat && newIpData?.lon && map.value) {
      const latLon = [newIpData.lat, newIpData.lon];
      map.value.setView(latLon, (zoom.value = 15));
      marker.value.setLatLng(latLon);
    }
  }
);
</script>

<template>
  <div id="map" ref="mapContainer"></div>
</template>

<style lang="css">
#map {
  display: block;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 0;
}
@media screen and(min-width: 768px) {
  #map {
    height: 80vh;
  }
}
</style>
