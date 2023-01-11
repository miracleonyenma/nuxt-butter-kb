<!-- ./pages/index.vue -->
<script setup>
const { data, error } = await useAsyncData("home", async () => {
  const categories = await $fetch("/api/getCategories?page=1&page_size=10");
  const articles = await $fetch("/api/getArticles?page=1&page_size=10");
  const FAQs = await $fetch("/api/getFAQs?page=1&page_size=10");

  return {
    categories,
    articles,
    FAQs,
  };
});

useHead({
  title: "GizmoGenius Knowledge Base",
  meta: [
    {
      key: "description",
      name: "description",
      content:
        "Your one-stop resource for information on our products and services.",
    },
  ],
});
</script>
<template>
  <main class="site-main">
    <header class="site-hero">
      <div class="wrapper">
        <h1 class="font-medium text-4xl">
          Welcome to GizmoGenius Knowledge Base
        </h1>
        <p class="text-lg">
          Your one-stop resource for information on our products and services.
        </p>
        <Search />
      </div>
    </header>
    <section class="site-section categories-section">
      <div class="wrapper">
        <header class="section-header">
          <h2 class="text-xl text-teal-800">Top Categories</h2>
        </header>

        <ul v-if="data.categories" class="categories-list">
          <li
            v-for="category in data.categories?.data"
            :key="category.slug"
            class="category-item"
          >
            <NuxtLink :to="`/categories/${category.slug}`">
              <div class="wrapper">
                <h3 class="font-medium text-teal-800 text-3xl capitalize mb-2">
                  {{ category.name }}
                </h3>
                <p class="text-lg">{{ category.fields.description }}</p>
              </div>
            </NuxtLink>
          </li>
        </ul>
        <span v-else>Oops... Nothing to see here</span>
      </div>
    </section>
    <section class="site-section articles-section">
      <div class="wrapper">
        <header class="section-header section-header">
          <h2 class="text-xl text-teal-800">Top Articles</h2>
        </header>

        <ul v-if="data.articles" class="articles-list">
          <li
            v-for="article in data.articles?.data"
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
    <section class="site-section faqs-section">
      <div class="wrapper">
        <header class="section-header">
          <h2 class="text-xl text-teal-800">Top FAQs</h2>
        </header>

        <ul v-if="data.FAQs" class="faqs-list">
          <li
            v-for="FAQ in data.FAQs?.data['kb_faqs']"
            :key="FAQ.meta.id"
            class="faq-item"
          >
            <details class="wrapper">
              <summary>
                <h3 class="inline font-medium text-teal-800 text-xl capitalize">
                  {{ FAQ.question }}
                </h3>
              </summary>
              <div class="prose p-4 max-w-4xl" v-html="FAQ.answer"></div>
            </details>
          </li>
        </ul>
        <span v-else>Oops... Nothing to see here</span>
      </div>
    </section>
  </main>
</template>