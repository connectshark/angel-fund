<template>
  <NuxtLayout>
    <h1 class="text-center text-3xl/loose font-title mb-8">天使會文章大全</h1>
    <div class="*:inline-block *:w-6 text-center *:bg-gray-50 divide-x mb-10">
      <button type="button" :disabled="status === 'pending'" v-if="data.page !== 1" @click="page--"><i class='bx bx-chevron-left' ></i></button>
      <span v-if="status === 'pending'"><i class='bx bx-loader bx-spin' ></i></span>
      <span v-else>{{ data.page }}</span>
      <button type="button" :disabled="status === 'pending'" v-if="data.hasMorePages" @click="page++"><i class='bx bx-chevron-right'></i></button>
    </div>
    <ul class="mx-auto w-11/12 max-w-3xl gap-4 columns-[10rem] space-y-8 mb-10">
      <li class=" rounded bg-white p-2 overflow-hidden" v-for="(item, i) in data.list">
        <NuxtLink class="text-xl" :to="`/article/` + item.topicId">
          <figure v-if="item.imageUrl">
            <img class="aspect-video" :src="item.imageUrl" :alt="item.title">
          </figure>
          <h3 class="hover:underline text-sm">{{ i + 1 }}.{{ item.title }}</h3>
          <p class="text-right">
            <span class="text-xs">{{ item.postDate }}</span>
          </p>
        </NuxtLink>
      </li>
    </ul>
    <div class="*:inline-block *:w-6 text-center *:bg-gray-50 divide-x">
      <button type="button" :disabled="status === 'pending'" v-if="data.page !== 1" @click="page--"><i class='bx bx-chevron-left' ></i></button>
      <span v-if="status === 'pending'"><i class='bx bx-loader bx-spin' ></i></span>
      <span v-else>{{ data.page }}</span>
      <button type="button" :disabled="status === 'pending'" v-if="data.hasMorePages" @click="page++"><i class='bx bx-chevron-right'></i></button>
    </div>
  </NuxtLayout>
  </template>
  
  <script setup>
  
  const page = ref(1)
  
  const {
    data,
    status
  } = await useFetch(`/api/fund`, {
    query: { page: page }
  })
  
  useHead({
    title: '天使會'
  })
  </script>