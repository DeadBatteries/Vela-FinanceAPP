export function calculateBalance(transactions){

    let balance=0;

    transactions.forEach((t) => {
       
        if(t.type === "revenue"){

            balance += t.value;

        }else if(t.type === "expense"){

            balance -= t.value;

        };

    });

    return balance;

};