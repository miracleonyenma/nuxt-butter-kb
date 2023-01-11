<!-- ./pages/categories/[slug].vue -->

<script setup>
const route = useRoute();

// get slug from route params
const { slug } = route.params;

const { data: category, error } = await useAsyncData(slug, async () => {
  const category = await $fetch(`/api/getCategory?slug=${slug}`);
  return category;
});

// set page title and meta description
useHead({
  title: category.value?.data.name,
  meta: [
    {
      key: "description",
      name: "description",
      content: category.value?.data.fields.description,
    },
  ],
});
</script>
<template>
  <main class="site-main">
    <header class="site-hero">
      <div class="wrapper">
        <h1 class="font-medium text-4xl">
          {{ category?.data.fields.name }}
        </h1>
        <p class="text-lg">
          {{ category?.data.fields.description }}
        </p>
      </div>
    </header>
    <section class="site-section articles-section">
      <div class="wrapper">
        <ul v-if="category?.data.fields.articles" class="articles-list">
          <li
            v-for="article in category?.data.fields.articles"
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
