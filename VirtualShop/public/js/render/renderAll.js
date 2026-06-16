import { calculateBalance } from "../modules/calculateBalance.js";
import { renderBalance } from "./renderBalance.js";
import { renderTransactions } from "./renderTransactions.js";

export function renderAll(bshow, tshow, transactions){

    renderTransactions(tshow, transactions);

    const balance = calculateBalance(transactions);

    renderBalance(bshow, balance);

};