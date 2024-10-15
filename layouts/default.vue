<template>
<header>
  <div class="mx-auto py-3 w-11/12 max-w-4xl flex items-center justify-between">
    <h1>
      <NuxtLink class=" flex items-center gap-2 w-fit" to="/">
        <img class=" aspect-square w-10" src="../assets/img/logo.png" alt="logo">
        <span>{{ site.title }}</span>
      </NuxtLink>
    </h1>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/forum/43">天使文</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</header>
<main class=" full-up pb-10">
  <slot/>
</main>
<footer class=" bg-slate-900 py-10 text-white">
  <div class="mx-auto w-11/12 max-w-5xl grid md:grid-cols-2 gap-8 mb-10">
    <div>
      <h3>
        <NuxtLink class=" flex items-center gap-2 w-fit" to="/">
          <img class=" aspect-square w-10" src="../assets/img/logo.png" alt="logo">
          <span>{{ site.title }}</span>
        </NuxtLink>
      </h3>
    </div>
    <div>
      <h5 class="font-title mb-4"><i class="bx bx-cube-alt" />Brands</h5>
      <ul class="*:mb-1">
        <li class="last:mb-0" v-for="brand in brands">
          <NuxtLink class="hover:underline text-xs/loose" :to="brand.url" target="_blank">{{ brand.name }}<i class='bx bx-link-external'></i></NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <div class="text-center mb-10">
    <a href="https://github.com/connectshark/angel-fund" target="_blank" rel="noopener noreferrer">
      <i class='bx bxl-github bx-sm'/>
    </a>
  </div>
  <div class="text-center">
    <h6 class=" text-xs">Copyright <i class='bx bx-copyright'></i> 2024 <NuxtLink class="hover:underline" to="/">{{ site.title }}</NuxtLink> <a class="underline" href="https://github.com/connectshark/angel-fund/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT License</a>.</h6>
  </div>
</footer>
</template>

<script setup>

const {
  site
} = useAppConfig()

const {
  data: brands
} = await useFetch('/api/brands.json')
</script>

<style scoped>

.full-up {
  min-height: calc(100svh - 184px);
}
</style>