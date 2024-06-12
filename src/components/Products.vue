<template>
  <p class="text-2xl bg-green-800 text-white mx-auto w-80 text-center p-3">
    Product Page
  </p>
  <div
    class="grid grid-cols-2 md:grid-cols-4 gap-10 place-content-center max-w-7xl mx-auto pt-10"
  >
    <p v-if="data">Looding...</p>
    <div
      v-else
      v-for="item in data"
      :key="item.id"
      class="flex flex-col justify-center items-center gap-1 border border-teal-400 p-3"
    >
      <img class="w-60 h-60" :alt="item.name" :src="item.image" />
      <p>{{ item.title.slice(0, 15) }}...</p>
      <p>{{ item.price }}</p>
      <p>{{ item.rating.rate }}</p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
const data = ref([]);
onMounted(async () => {
  let result = await axios.get("https://fakestoreapi.com/products");
  data.value = result.data;
  console.log(data);
});
</script>
