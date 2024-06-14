<!-- Breadcrumb.vue -->
<template>
    <nav aria-label="breadcrumb" class="mb-5">
      <ol class="breadcrumb">
        <li
          v-for="(breadcrumb, index) in breadcrumbs"
          :key="index"
          class="breadcrumb-item"
          :class="{ active: index === breadcrumbs.length - 1 }"
        >
          <router-link v-if="index < breadcrumbs.length - 1" :to="breadcrumb.path">{{ breadcrumb.name }}</router-link>
          <span v-else>{{ breadcrumb.name }}</span>
        </li>
      </ol>
    </nav>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  
  const breadcrumbs = computed(() => {
    let matched = route.matched.filter(r => r.meta && r.meta.breadcrumb)
    return matched.map(r => {
      return {
        path: r.path,
        name: r.meta.breadcrumb
      }
    })
  })
  </script>
  
  <style scoped>
  .breadcrumb {
    padding: 0.5rem 1rem;
    /* background-color: #f8f9fa; */
    border-radius: 0.25rem;
  }
  .breadcrumb-item + .breadcrumb-item::before {
    content: ">";
  }
  .breadcrumb-item.active {
    font-weight: bold;
  }
  </style>
  