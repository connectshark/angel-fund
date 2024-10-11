<template>
<NuxtLayout>
  <div class="py-5 w-11/12 mx-auto max-w-3xl">
    <h2 class="font-title text-balance  text-center text-2xl/loose font-bold">{{ data.data.extraData.topicTitle }}</h2>
    <p class="text-right space-x-4">
      <span><i class='bx bxs-user-circle'></i>{{ data.data.extraData.topicPoster }}</span>
      <span class="bg-gray-200 text-xs">{{ data.data.extraData.forumName }}</span>
      <span>{{ data.data.extraData.createdAt }}</span>
    </p>
  </div>
  <article class="max-w-3xl mx-auto w-11/12 mb-20" v-html="markdownText"></article>
  <ul v-if="data.code === '1000'" class="max-w-3xl mx-auto w-11/12 *:mb-4 *:border-gray-200 *:border-b *:pb-4">
    <li  v-for="reply in replies">
      <div class=" flex items-center gap-2 mb-2">
        <figure>
          <img class="aspect-square w-8 rounded-full object-center object-cover" :src="reply.avatar" alt="avatar">
        </figure>
        <p>{{ reply.username }} <span class=" text-xs">{{ reply.time }}</span></p>
      </div>
      <div v-html="reply.content"></div>
    </li>
  </ul>
  <div class="max-w-3xl mx-auto w-11/12">
    <NuxtLink class="py-1 border-current border active:bg-gray-900 active:text-white transition-colors inline-block px-3 rounded-3xl bg-white" to="/"><i class='bx bx-home'></i>回首頁</NuxtLink>
  </div>
</NuxtLayout>
</template>

<script setup>
import markdownit from 'markdown-it'
const md = markdownit({
  typographer: true,
})
const route = useRoute()

const articleID = route.params.id

const {
  data
} = await useFetch(`/api/fundbot/${ articleID }`)

const markdownText = ref('')
const replies = ref([])
if (data.value.code === '4008') {
const string = data.value.data.extraData.firstPostDescription.replace(/\\n&nbsp;/g, '\n')
  .replace(/\n\n/g, '\n')
  .replace(/1\./, '# ')
  .replace(/2\./, '## ')
  .replace(/3\./, '## ')
  .replace(/\n/g, '\n\n')
markdownText.value = md.render(string)
} else if (data.value.code === '1000') {
markdownText.value = data.value.data.list[0].text
replies.value = data.value.data.list.slice(1).map(re => {
  return {
    username: re.userName,
    content: re.text,
    avatar: re.userAvatar,
    time: re.postTime
  }
})
}

useHead({
  title: data.value.data.extraData.topicTitle
})
</script>