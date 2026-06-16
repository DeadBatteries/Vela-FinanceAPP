export function saveLocal(a){

    const stringfied = JSON.stringify(a);
    localStorage.setItem("saved", stringfied);

};


export function loadLocal(){

    const retrievedData = localStorage.getItem("saved");
    return retrievedData ? JSON.parse(retrievedData) : [];

};