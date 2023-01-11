<script setup>
const query = ref("");
const router = useRouter();

const submitForm = (e) => {
  e.preventDefault();
  // route to search page with query
  router.push({ path: "/search", query: { query: query.value } });
};
</script>
<template>
  <div class="form-cont">
    <form @submit="submitForm" class="search-form">
      <div class="wrapper">
        <div class="form-control search">
          <input
            v-model="query"
            name="search"
            id="search"
            type="text"
            class="form-input"
            placeholder="Enter your query"
          />
          <button class="cta search">Search</button>
        </div>
      </div>
    </form>
  </div>
</template>
