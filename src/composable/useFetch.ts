import { onMounted, ref } from "vue";
import axios from "axios";

export function useFetch() {
  const data = ref(null);
  const error = ref(null);

  // function that takes the url with the query:
  const fetchData = async (url: string) => {
    try {
      const res = await axios.get(url);
      data.value = res.data;
    } catch (error) {
      error.value = error;
    }
  };

  return { data, error, fetchData };
}
