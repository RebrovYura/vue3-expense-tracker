<template>
    <h3>History</h3>
    <ul id="list" class="list">
        <li v-for="item in transactions" v-bind:key="item.id" v-bind:class="item.amount < 0 ? 'minus' : 'plus'">
            {{ item.text }} <span>{{ item.amount }}$</span>
        </li>
        <!-- <li class="minus">
            Cash <span>-$400</span>
            <button class="delete-btn">x</button>
        </li>
        <li class="plus">
            Paycheck <span>$400</span>
            <button class="delete-btn">x</button>
        </li> -->
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

</script>

// Define component name

<script>
export default {
    name: 'TransactionList'
}
</script>

<style scoped></style>