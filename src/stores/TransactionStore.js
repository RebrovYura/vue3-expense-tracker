import { defineStore } from "pinia";

export const useTransactionStore = defineStore('transactionStore', {
    state: () => ({
        transactions: []
    })
})