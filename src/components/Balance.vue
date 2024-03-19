<template>
    <div class="px-5 py-7 rounded-3xl text-white bg-[#171717] shadow-2xl">
        <p class="text-xl">Мой бюджет</p>
        <div class="flex justify-between items-center">
            <div>
                <span class="text-xl ">₽{{ ' ' }}</span>
                <span class="text-3xl pl-1">{{ total }}</span>
            </div>
            <p>RUB</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    total: {
        type: Number,
        required: true
    }
})
</script>

<script>
export default {
    name: 'Balance'
}
</script>