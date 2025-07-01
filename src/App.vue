<script setup>
import { ref } from "vue";
import Map from "./components/Map.vue";
import Header from "./components/Header.vue";
import Result from "./components/Result.vue";

const ipData = ref(null);

const updateIpData = (data) => {
  ipData.value = data;
};
</script>

<template>
  <div>
    <Header @update-ip-data="updateIpData" />
    <Map :ipData="ipData" />
  </div>
</template>
