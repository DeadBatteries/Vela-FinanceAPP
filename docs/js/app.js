import { calculateBalance } from "./modules/calculateBalance.js";
import { createTransaction } from "./modules/createTransaction.js";
import { renderAll } from "./render/renderAll.js";
import { renderTransactions } from "./render/renderTransactions.js";
import { loadLocal, saveLocal } from "./storage/localStorage.js";

//Organizador Financeiro

const balance_show = document.getElementById("balance");
const transactions_show = document.getElementById("view_transactions");
let transactions = loadLocal();

document.addEventListener("DOMContentLoaded",()=>{

    renderAll(balance_show, transactions_show, transactions);
    const form = document.getElementById("transactions_form");
    
    form.addEventListener("submit", (e)=>{
        
        e.preventDefault();
        
        const transaction = createTransaction(form);
        console.log(transaction);  

        transactions.push(transaction);
        saveLocal(transactions);
    
        renderAll(balance_show, transactions_show, transactions);
        
    });

    transactions_show.addEventListener("click", (e)=>{

        if(!e.target.matches(".deletebtn"))return;

        const id = e.target.dataset.id;

        console.log(id);

        const filteredTransactions = transactions.filter(i => i.id !== id);
        
        transactions=filteredTransactions;
        saveLocal(transactions);
        
        renderAll(balance_show, transactions_show, transactions);

    });

});