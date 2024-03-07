<template>
    <h4>Your Balance</h4>
    <div id="balance">{{ total }}$</div>
</template>

<script setup>
import {defineProps} from 'vue'

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

<style scoped></style>