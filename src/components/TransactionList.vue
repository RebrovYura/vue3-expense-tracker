<template>
    <h3 class="text-xl font-semibold">История</h3>
    <ul class="list list-none p-0 mb-10">
        <li v-for="item in transactions" v-bind:key="item.id" v-bind:class="item.amount < 0 ? 'minus' : 'plus'">
            {{ item.text }} <span>{{ item.amount }}$</span>
            <button @click="deleteTransaction(item.id)" class="delete-btn">
                x
            </button>
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    transactions: {
        type: Array,
        requiered: true
    }
})

const emit = defineEmits(["transactionDeleted"])

const deleteTransaction = (id) => {
    emit("transactionDeleted", id)
} 
</script>

<script>
export default {
    name: 'TransactionList'
}
</script>