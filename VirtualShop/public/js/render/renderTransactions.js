
export function renderTransactions(e, t){

    e.innerHTML = "";

    const fragment = document.createDocumentFragment();

    t.forEach((i)=>{
      
        const card = document.createElement("div");
        card.classList.add("transactions");

        const tvalue = document.createElement("p");
        tvalue.textContent = `${i.value.toLocaleString("pt-BR", {
            style:"currency",
            currency:"BRL"
        })}`;

        const ttype = document.createElement("p");
        ttype.textContent = `Tipo: ${i.type}`

        const tdescription = document.createElement("p");
        tdescription.textContent = `Descrição: ${i.description}`

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deletebtn");
        deleteBtn.dataset.id = i.id;
        deleteBtn.textContent = "Delete";

        card.append(tvalue, ttype, tdescription, deleteBtn);
        fragment.appendChild(card);

    });

    

    e.appendChild(fragment);

};