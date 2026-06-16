export function createTransaction(form){

    const formData = new FormData(form);

    return{

    id:crypto.randomUUID(),
    value:Number(formData.get("transaction")),
    type:formData.get("transaction-type"),
    description:formData.get("transaction-description")

    }


};