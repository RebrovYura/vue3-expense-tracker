<template>
    <h3>History</h3>
    <ul id="list" class="list">
        <li v-for="item in transactions" v-bind:key="item.id" v-bind:class="item.amount < 0 ? 'minus' : 'plus'">
            {{ item.text }} <span>{{ item.amount }}$</span>
            <button @click="deleteTransaction(item.id)" class="delete-btn">x</button>
        </li>
    </ul>
</template>

<script setup>
import { defineProps } from 'vue';

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

<style scoped></style>