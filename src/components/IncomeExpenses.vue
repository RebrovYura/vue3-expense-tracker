<template>
    <div class="inc-exp-container">
        <div>
            <h4>Доходы</h4>
            <p id="money-plus" class="money plus">{{ income }} ₽</p>
        </div>
        <div>
            <h4>Расходы</h4>
            <p id="money-minus" class="money minus">{{ expense }} ₽</p>
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