<script setup lang="js">

const scrollUp = () => {
const currentScroll = document.documentElement.scrollTop || document.body.scrollTop
  if(currentScroll > 0){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  console.log('clicked');

}
</script>

<template>
  <div class="button-container">
    <button @click="scrollUp" class="btn">&#11014;</button>
  </div>
</template>

<style scoped>
.button-container {
  position: absolute;
  bottom: 20px;
  right: 10px;
}
.btn {
  font-family: inherit;
  font-size: 2rem;
  font-weight: 700;
  padding-inline: 32px;
  padding-block: 8px;
  outline: none;
  border: none;
  background: #4d68f2;
  border-radius: 12px;
  color: #fff;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
}
</style>
