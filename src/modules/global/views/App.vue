<script setup lang="ts">
import { ref } from 'vue';
import HeaderLayout from '@global/components/HeaderLayout.vue'
const loggedIn = ref(false)
</script>

<template>
<HeaderLayout v-model:logged-in="loggedIn"/>
<p class="msg">{{loggedIn? 'secret message' : 'normal message'}}</p>
</template>

<style lang="scss">
</style>
