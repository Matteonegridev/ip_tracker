<script setup>
import { ref } from "vue";
import Map from "./components/Map.vue";
import Header from "./components/Header.vue";
import Footer from "@/components/Footer.vue";

const ipData = ref(null);
</script>

<template>
  <div>
    <Header v-model:update-ip-data="ipData" />
    <Map ipData="ipData" />
    <Footer />
  </div>
</template>
