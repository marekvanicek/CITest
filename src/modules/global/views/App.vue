<script setup lang="ts">
import { ref } from 'vue';
import HeaderLayout from '../components/HeaderLayout.vue'
const loggedIn = ref(true)
</script>

<template>
<HeaderLayout v-model:logged-in="loggedIn"/>
{{ loggedIn }}
</template>

<style lang="scss">
</style>
