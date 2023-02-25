<script setup lang="ts">
import { watchEffect } from 'vue';

export interface Props {
    loggedIn: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{(e: 'update:loggedIn', value: boolean): void}>()
</script>

<template>
    <div class="header">
        <h1 class="header__title">
            CITest
        </h1>
        <button v-if="!props.loggedIn" type="button" @click="emit('update:loggedIn', !props.loggedIn)">
            Log In
        </button>
        <button v-else type="button" @click="emit('update:loggedIn', !props.loggedIn)">
            Log Out
        </button>
    </div>
</template>

<style scoped lang="scss">
.header {
    @apply py-10 pl-3 pr-6 bg-red-300 flex justify-between;

    &__title {
        @apply text-3xl;
    }
}</style>
