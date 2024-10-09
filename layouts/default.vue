<template>
<header>
  <div class="mx-auto py-3 w-11/12 max-w-4xl">
    <h1>
      <NuxtLink class=" flex items-center gap-2 w-fit" to="/">
        <img class=" aspect-square w-10" src="../assets/img/logo.png" alt="logo">
        <span>{{ site.title }}</span>
      </NuxtLink>
    </h1>
  </div>
</header>
<main class=" full-up pb-10">
  <slot/>
</main>
<footer class=" bg-slate-900 py-10 text-white">
  <div class="mx-auto w-11/12 max-w-4xl">
    <h3>
      <NuxtLink class=" flex items-center gap-2 w-fit" to="/">
        <img class=" aspect-square w-10" src="../assets/img/logo.png" alt="logo">
        <span>{{ site.title }}</span>
      </NuxtLink>
    </h3>
  </div>
</footer>
</template>

<script setup>

const {
  site
} = useAppConfig()
</script>

<style scoped>

.full-up {
  min-height: calc(100svh - 184px);
}
</style>