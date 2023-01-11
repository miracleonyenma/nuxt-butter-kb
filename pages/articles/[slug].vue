<!-- ./pages/articles/[slug].vue -->

<script setup>
const route = useRoute();

// get slug from route params
const { slug } = route.params;

const { data: article, error } = await useAsyncData(slug, async () => {
  const article = await $fetch(`/api/getArticle?slug=${slug}`);
  return article;
});

// set page title and meta description
useHead({
  title: article.value?.data.name,
  meta: [
    {
      key: "description",
      name: "description",
      content: article.value?.data.fields.description,
    },
  ],
});
</script>
<template>
  <article class="site-main">
    <header class="site-hero">
      <div class="wrapper">
        <h1 class="font-medium text-4xl">
          {{ article?.data.fields.name }}
        </h1>
        <p class="text-lg">
          {{ article?.data.fields.description }}
        </p>
      </div>
    </header>
    <div
      class="prose prose-xl max-w-4xl m-auto py-12"
      v-html="article?.data.fields.content"
    />
  </article>
</template>
