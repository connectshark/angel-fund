<template>
<NuxtLayout>
  <h1 class="text-center text-3xl/loose font-title mb-8">全文章</h1>
  <nav class="mx-auto w-11/12 max-w-3xl text-xs *:inline-block *:px-2 mb-10">
    <a v-for="item in data" :href="`#` + item.forumId">{{ item.forumName }}</a>
  </nav>
  <div class="mx-auto w-11/12 max-w-3xl *:mb-20">
    <section class="last:mb-0" v-for="topics in data">
      <h2 class="text-xl/loose text-center" :id="topics.forumId">{{ topics.forumName }}</h2>
      <ul class="grid grid-cols-2 gap-2 *:rounded *:bg-white *:p-2 *:overflow-hidden *:h-min">
        <li v-for="topic in topics.topics">
          <NuxtLink class="text-xl" :to="`/article/` + topic.topicId">
            <h3 class="hover:underline text-sm mb-3">{{ topic.title }}</h3>
            <p class="text-right text-xs *:inline-block space-x-1">
              <span>{{ topic.poster }}</span>
              <span class=" bg-gray-200">{{ topic.forumName }}</span>
              <span>{{ topic.date }}</span>
            </p>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </div>
</NuxtLayout>
</template>

<script setup>
const {
  data,
  status
} = await useFetch(`/api/topic`)

useHead({
  title: ''
})
</script>