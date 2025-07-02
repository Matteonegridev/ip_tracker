<script setup>
import { useFetch } from "@/composable/useFetch";
import { ref } from "vue";

import Result from "./Result.vue";

const ip = ref("");
const { data, fetchData } = useFetch();
const loading = ref(false);

// define emit to pass data up to App.vue so it can be passed down to map as prop:
const emit = defineEmits(["update-ip-data"]);

const handleSubmit = async () => {
  await fetchData(`http://ip-api.com/json/${ip.value}`);
  emit("update-ip-data", data.value);
  console.log(data.value);
  loading.value = true;
  ip.value = "";
};

const getTimezone = (timezone) => {
  const date = new Date();

  // Get user's locale (example)
  const userLocale =
    navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || "en-US";

  const locale = new Intl.DateTimeFormat(userLocale, {
    timeZone: timezone,
    timeStyle: "long",
  }).format(date);

  if (locale.includes("EDT") || locale.includes("ADT")) {
    const userTime = new Date().getHours();

    const newDate = locale.split(" ").slice(0, -2).join(" ");
    const newHour = parseInt(newDate);
    const differenceHour = newHour - userTime;

    return `GMT ${differenceHour}`;
  } else {
    const formatDate = locale.split(" ").pop();

    return formatDate;
  }
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
      <Transition>
        <Result
          v-if="loading"
          @get-data="handleSubmit"
          :ip="data?.query"
          :location="data?.city"
          :timezone="getTimezone(data?.timezone)"
          :isp="data?.isp"
        />
      </Transition>
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
  position: relative;
}

.wrapper-input {
  display: flex;
  align-items: center;
  position: relative;
}

.form-input {
  border-radius: 12px;
  padding: 1rem 3rem 1rem 1rem;
  outline: none;
  border: none;
  font-size: 1rem;
  width: 90dvw;
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

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-20px);
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
