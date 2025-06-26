<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { reactive, ref } from "vue";

const zoom = ref(2);

const coordinates = reactive({
  x: 47.41322,
  y: -1.219482,
});
</script>

<template>
  <div id="map">
    <l-map ref="map" v-model:zoom="zoom" :center="[coordinates.x, coordinates.y]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<style lang="css">
#map {
  display: block;
  height: 100vh;
  width: 100%;
}
</style>
