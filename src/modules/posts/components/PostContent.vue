<script setup lang="ts">
export interface Props {
    author: string
    posted: string
}

 const props = defineProps<Props>()


</script>
<template>
    <div class="post-content">
        <h1 class="post-content__title">
            <slot name="title"></slot>
        </h1>
        <div class="post-content__meta">
            <p>author: <span>{{ author }}</span></p>
            <p>posted: <span>{{ posted }}</span></p>
        </div>

        <div class="post-content__content">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .post-content {
        @apply p-4 bg-red-300 flex flex-col;

        &__title {
            @apply text-2xl font-semibold;
        }

        &__meta {
            @apply ml-auto text-xs flex gap-2;

            & p {
                @apply font-light;
            }

            & span {
                @apply font-normal;
            }

        }

        &__content {
        @apply mt-3;
        }
    }
</style>