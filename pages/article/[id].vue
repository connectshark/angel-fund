<template>
<NuxtLayout>
  <div class="py-5 w-11/12 mx-auto max-w-3xl">
    <h2 class=" text-balance  text-center text-2xl/loose font-bold">{{ data.topicTitle }}</h2>
    <p class=" text-right"><span>{{ data.createdAt }}</span></p>
  </div>
  <article class="max-w-3xl mx-auto w-11/12" v-html="article"></article>
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

let markdownText = data.value.firstPostDescription.replace(/\\n&nbsp;/g, '\n')
.replace(/\n\n/g, '\n')
.replace(/1\./, '# ')
.replace(/2\./, '## ')
.replace(/3\./, '## ')
.replace(/\n/g, '\n\n')

const article = md.render(markdownText)

useHead({
  title: data.value.topicTitle
})
</script>