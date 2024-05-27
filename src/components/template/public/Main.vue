<template>

    <Header />


    <div class="container mx-auto">
        <RouterView />
    </div>

    <!-- <RouterView /> -->

    <Footer />
</template>

<script setup>

import { RouterView } from 'vue-router';
import Footer from '@/components/template/public/Footer.vue';
import Header from '@/components/template/public/Header.vue';



</script>

<style lang="scss" scoped>

</style>