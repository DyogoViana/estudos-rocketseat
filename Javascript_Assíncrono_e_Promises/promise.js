/*
    # Promise

    - A promessa de que algo irá acontecer.
    Poderá dá certo ou errado, mas irá acontecer.
*/

let aceitar = false;

console.log(`pedir Uber`);

const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve(`Pedido aceito.`);
    } else return reject(`Pedido negado!`);
});

console.log(`--------------`);
console.log(` Aguardando...`);
console.log(`--------------`);

promessa
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log(`Finalizada.`))