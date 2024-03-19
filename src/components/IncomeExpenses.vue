<template>
    <div class="flex justify-around p-5 mt-4 rounded-3xl text-center">
        <div class="">
            <h4 class="text-xl font-semibold">Доходы</h4>
            <p class="text-lg text-[#2ecc71]">{{ income }} ₽</p>
        </div>
        <div>
            <h4 class="text-xl font-semibold">Расходы</h4>
            <p class="text-lg text-[#c0392b]">{{ expense }} ₽</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    income: {
        type: Number,
        required: true
    },
    expense: {
        type: Number,
        required: true
    }
})
</script>

<script>
export default {
    name: 'IncomeExpenses'
}
</script>

<style scoped>
.inc-exp-container {
    background-color: #fff;
    box-shadow: var(--box-shadow);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
}

.inc-exp-container>div {
    flex: 1;
    text-align: center;
}

.inc-exp-container>div:first-of-type {
    border-right: 1px solid #dedede;
}
</style>