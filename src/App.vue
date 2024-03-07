<template>
  <Header />
  <div class="container">
    <Balance :total="+total"/>
    <IncomeExpenses :income="+income" :expense="+expense" />
    <TransactionList :transactions="transactions" @transactionDeleted="handleTransactionDelete"/>
    <TransactionForm @transactionSubmitted="handleTransactionSubmit"/>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast()

const transactions = ref([
  { id: 1, text: 'Flower', amount: -30 },
  { id: 2, text: 'Salary', amount: 159.63 },
  { id: 3, text: 'Book', amount: -9.99 },
  { id: 4, text: 'Camera', amount: 149.99 }
]);


const total = computed(() => {
    return transactions.value.reduce((acc, transaction) => {
        return acc + transaction.amount
    }, 0)
})

const income = computed(() => {
    return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
        return acc + transaction.amount
    }, 0).toFixed(2)
})

const expense = computed(() => {
    return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
        return acc + transaction.amount
    }, 0).toFixed(2)
})

const handleTransactionSubmit = (transactionData) => {
  transactions.value.push({
    id: Date.now(),
    text: transactionData.text,
    amount: transactionData.amount
  })

  toast.success('Операция успешно добавлена!✨')
}

const handleTransactionDelete = (id) => {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id)
  toast.success('Операция была успешно удалена!✏️')
}
</script>

<style scoped></style>