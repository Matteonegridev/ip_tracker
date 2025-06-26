<script setup>
import { useFetch } from "@/composable/useFetch";
import { ref } from "vue";

const ip = ref("");
const ipData = ref(null);

const handleSubmit = async () => {
  const { data } = await useFetch(ip.value);
  ipData.value = data.value;
  console.log(ipData.value);
  ip.value = "";
};
</script>

<template>
  <header>
    <h1 class="header-title">IP Address Tracker</h1>
    <div class="header-form">
      <form @submit.prevent="handleSubmit" method="post">
        <div class="wrapper-input">
          <input type="text" class="form-input" placeholder="Search for any IP or domain" v-model="ip" />
          <button class="form-button" type="submit">
            <img class="icon" src="../assets/images/icon-arrow.svg" />
          </button>
        </div>
      </form>
    </div>
  </header>
</template>

<style scoped>
header {
  background: url("../assets/images/pattern-bg-mobile.png");
  background-size: cover;
  background-position: center;
  width: 100vw;
  text-align: center;
  padding: 2rem 1rem;
}

.header-title {
  color: #fff;
  font-weight: 500;
  font-size: calc(1rem + 2vw);
  margin-bottom: 1rem;
}

.header-form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper-input {
  position: relative;
  display: flex;
  align-items: center;
}

.form-input {
  border-radius: 12px;
  padding: 1rem 3rem 1rem 1rem;
  outline: none;
  border: none;
  font-size: 1rem;
  width: 300px;
  max-width: 80vw;
  font-family: inherit;
}

.form-button {
  border-radius: 0 12px 12px 0;
  height: 100%;
  aspect-ratio: 1;
  outline: none;
  border: none;
  background: #000;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.form-input::placeholder {
  color: rgb(201, 201, 201);
}

@media screen and (min-width: 768px) {
  header {
    background: url("../assets/images/pattern-bg-desktop.png");
    background-size: cover;
    padding: 3rem 2rem;
  }

  .form-input {
    width: 400px;
    font-size: 1.1rem;
  }

  .header-title {
    font-size: 2rem;
  }
}
</style>
