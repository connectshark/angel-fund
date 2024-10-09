<template>
<NuxtLayout>
  <h1 class=" text-center text-3xl/loose">天使會文章大全</h1>
  <ul class=" mx-auto w-11/12 max-w-3xl space-y-4">
    <li v-for="(item, i) in data">
      <NuxtLink class="hover:underline text-lg/loose" :to="`/article/` + item.link">{{ i + 1 }}.{{ item.content }}</NuxtLink>
    </li>
  </ul>
</NuxtLayout>
</template>

<script setup>
const {
  data
} = await useFetch('/api/fund')

useHead({
  title: ''
})
</script>