import { ref } from "vue";
import axios from "axios";

export async function useFetch(query) {
  const data = ref(null);
  const error = ref(null);

  try {
    const res = await axios.get(`http://ip-api.com/json/${query}`);
    data.value = res.data;
    console.log("res:", res.data);
  } catch (error) {
    console.log(error);
  }

  return { data, error };
}

//24.48.0.1
