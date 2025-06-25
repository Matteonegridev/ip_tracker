<script setup></script>

<template>
  <header>
    <p></p>
  </header>
</template>

<style lang="css" scoped>
header {
  background: url("../assets/images/pattern-bg-mobile.png");
  background-size: 100%;
  height: 250px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

@media screen and (min-width: 25rem) {
  header {
    background: url("../assets/images/pattern-bg-desktop.png");
    background-size: 100%;
    height: 250px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
}
</style>
