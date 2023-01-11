<!-- ./pages/search.vue -->

<script setup>
const route = useRoute();

// get `query` from route query
const { query } = route.query;

const { data: search } = await useAsyncData("search", async () => {
  const data = await $fetch(`/api/searchArticles?query=${query}`);
  return data;
});

useHead({
  title: `Search results for: ${query}`,
});
</script>
<template>
  <main class="site-main">
    <header class="site-hero">
      <div class="wrapper">
        <h1 class="font-medium text-4xl">Search results for: {{ query }}</h1>
        <Search />
      </div>
    </header>
    <section class="site-section articles-section">
      <div class="wrapper">
        <header class="section-header section-header">
          <h2 class="text-xl text-teal-800">Top Matches</h2>
        </header>

        <ul v-if="search.data" class="articles-list">
          <li
            v-for="article in search?.data"
            :key="article.slug"
            class="article-item"
          >
            <NuxtLink :to="`/articles/${article.slug}`">
              <div class="wrapper">
                <h3 class="font-medium text-teal-800 text-2xl capitalize mb-2">
                  {{ article.name }}
                </h3>
                <p class="text-lg">{{ article.fields.description }}</p>
              </div>
            </NuxtLink>
          </li>
        </ul>
        <span v-else>Oops... Nothing to see here</span>
      </div>
    </section>
  </main>
</template>
