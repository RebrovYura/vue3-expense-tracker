<template>
  <Header />
  <div class="max-w-[420px] my-8 mx-auto">
    <Balance :total="+total" />
    <div class="block">
      <IncomeExpenses :income="+income" :expense="+expense" />
      <TransactionList :transactions="transactions" @transactionDeleted="handleTransactionDelete" />
      <TransactionForm @transactionSubmitted="handleTransactionSubmit" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useToast } from 'vue-toastification';

const toast = useToast()

const transactions = ref([]);

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'))
  if (savedTransactions) transactions.value = savedTransactions
})

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
  saveTransactions()

  toast.success('Операция успешно добавлена!✨')
}

const handleTransactionDelete = (id) => {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id)
  saveTransactions()
  toast.success('Операция была успешно удалена!✏️')
}

const saveTransactions = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}
</script>

<style scoped></style>