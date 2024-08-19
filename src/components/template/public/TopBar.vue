<template>
    <!-- <header class="bg-gray-800 text-white p-4">
        <h1>Mi Sitio Web</h1>
    </header> -->
    <header class="text-gray-600 body-font bg-primary-light">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <RouterLink to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <LogoBrand />
                <span class="ml-3 text-4xl font-bold">{{ siteName }}</span>
            </RouterLink>

            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <RouterLink to="/login" class="mr-5 hover:text-gray-900">{{ $t("login") }}</RouterLink>
                <!-- <a class="mr-5 hover:text-gray-900">Second Link</a> -->
            </nav>
        </div>
    </header>

    
</template>

<script setup>
import LogoBrand from '@/components/icons/IconBrand.vue';

const siteName = import.meta.env.VITE_APP_TITLE;

</script>

<style scoped></style>