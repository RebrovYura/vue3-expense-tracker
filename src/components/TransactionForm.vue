<template>
    <h3 class="font-semibold text-xl">Добавить новую операцию</h3>
    <form id="form" @submit.prevent="onSubmit">
        <div class="form-control">
            <label for="text">Название</label>
            <input type="text" id="text" v-model="text" placeholder="Название операции...">
        </div>
        <div class="form-control">
            <label for="amount">Сумма <br /> (отрицательная - расходы, положительная - доходы)</label>
            <input type="text" id="amount" v-model="amount" placeholder="Сумма...">
        </div>
        <button
            class="cursor-pointer bg-[#171717] shadow-block-shadow text-white border-0 rounded-xl block text-base font-semibold mt-3 mb-8 p-4 w-full">Добавить</button>
    </form>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import { useToast } from 'vue-toastification';

const text = ref('')
const amount = ref('')
const toast = useToast()
const emit = defineEmits(["transactionSubmitted"])

const onSubmit = () => {
    if (!text.value || !amount.value) {
        toast.error('Поля не должны быть пустыми!😕 ')
        return
    }

    const transactionData = {
        text: text.value,
        amount: parseFloat(amount.value)
    }

    emit("transactionSubmitted", transactionData)

    text.value = ''
    amount.value = ''
}
</script>

<script>
export default {
    name: 'TransactionForm',
}
</script>

<style scoped></style>