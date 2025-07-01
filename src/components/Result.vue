<script setup>
const labels = ["ip address", "location", "timezone", "isp"];
const keys = ["ip", "location", "timezone", "isp"];

const props = defineProps(["ip", "location", "timezone", "isp"]);

const emit = defineEmits(["get-data"]);
</script>

<template>
  <div class="result-box">
    <div class="result-item" v-for="(label, index) in labels" :key="index">
      <h1 class="result-box-title">
        {{ label }}
      </h1>
      <p class="result-box-par">{{ props[keys[index]] }}</p>
    </div>
  </div>
</template>

<style>
.result-box {
  background: #fff;
  position: absolute;
  top: 100%;
  z-index: 1;
  margin-top: 1rem;
  border-radius: 12px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  max-width: 90dvw;
  width: 100%;
}
.result-box-title {
  font-family: inherit;
  font-weight: 700;
  font-size: 0.7rem;
  text-transform: uppercase;
  color: var(--dark-gray);
  margin-bottom: 0.2rem;
}
.result-item {
  padding-block: 0.8rem;
}
.result-box-par {
  font-family: inherit;
  font-weight: 700;
  font-size: clamp(1rem, 2vw, 1.5rem);
}

@media screen and (min-width: 724px) {
  .result-box {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    gap: 2rem;
    padding-block: 2rem;
  }

  .result-item {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-right: 1.5rem;
    position: relative;
    text-align: left;
  }

  .result-item:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 1px;
    background-color: var(--dark-gray); /* or use var(--border-color) */
  }
}
</style>
