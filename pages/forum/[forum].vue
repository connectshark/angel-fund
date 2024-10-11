<template>
  <NuxtLayout>
    <h1 v-if="Array.isArray(data.list)" class="text-center text-3xl/loose font-title mb-8">全 {{ data.list[0].forumName }}文章</h1>
    <h1 class="text-center text-3xl/loose font-title mb-8" v-else>無主題</h1>
    <div class="*:inline-block *:w-6 text-center *:bg-gray-50 divide-x mb-10">
      <button type="button" :disabled="status === 'pending'" v-if="data.page !== 1" @click="page--"><i class='bx bx-chevron-left' ></i></button>
      <span v-if="status === 'pending'"><i class='bx bx-loader bx-spin' ></i></span>
      <span v-else>{{ data.page }}</span>
      <button type="button" :disabled="status === 'pending'" v-if="data.hasMorePages" @click="page++"><i class='bx bx-chevron-right'></i></button>
    </div>
    <ul v-if="Array.isArray(data.list)" class="mx-auto w-11/12 max-w-3xl gap-4 grid grid-cols-2 mb-10 *:rounded *:bg-white *:p-2 *:overflow-hidden *:h-fit">
      <li v-for="(item, i) in data.list">
        <NuxtLink class="text-xl" :to="`/article/` + item.topicId">
          <figure v-if="item.imageUrl">
            <img loading="lazy" class="aspect-video object-center object-contain" :src="item.imageUrl" :alt="item.title">
          </figure>
          <h3 class="hover:underline text-sm">{{ item.title }}</h3>
          <p class="text-right text-xs *:inline-block space-x-1">
            <span>{{ item.poster }}</span>
            <span class="bg-gray-200">{{ item.forumName }}</span>
            <span class="text-xs">{{ item.postDate.slice(0, 10) }}</span>
          </p>
        </NuxtLink>
      </li>
    </ul>
    <div v-else class=" text-center">
      <NuxtLink class=" underline" to="/">回首頁</NuxtLink>
    </div>
    <div class="*:inline-block *:w-6 text-center *:bg-gray-50 divide-x">
      <button type="button" :disabled="status === 'pending'" v-if="data.page !== 1" @click="page--"><i class='bx bx-chevron-left' ></i></button>
      <span v-if="status === 'pending'"><i class='bx bx-loader bx-spin' ></i></span>
      <span v-else>{{ data.page }}</span>
      <button type="button" :disabled="status === 'pending'" v-if="data.hasMorePages" @click="page++"><i class='bx bx-chevron-right'></i></button>
    </div>
  </NuxtLayout>
</template>
<script setup>
const route = useRoute()
const forum = route.params.forum
const page = ref(1)

const {
  data,
  status
} = await useFetch(`/api/fund`, {
  query: { page: page, forum: forum }
})

useHead({
  title: Array.isArray(data.value.list) ? data.value.list[0].forumName : '無主題'
})
</script>