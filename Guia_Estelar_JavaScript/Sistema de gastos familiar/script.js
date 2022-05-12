/*
    # Sistemas de gastos familiar

    - Crie um objeto que possuirá duas propriedades, ambas do tipoarray:
    * receitas: []
    * despesas: []
    
    - Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a 
    família está com saldo positivo ou negativo, seguindo do valor do saldo.
*/

let familia = {
    receita: [12000, 5000, 250],
    despesas: [2000, 1000, 100, 300, 200]
}

const somaDasReceitas = (array) => {
    let total = 0;

    for (let valor of array) {
        total = total + valor;
    }

    return total;
}

const gastoFamiliar = () => {
    let totalReceita = somaDasReceitas(familia.receita);
    let totalDespesa = somaDasReceitas(familia.despesas);

    const calculoDespesas = totalReceita - totalDespesa;
    const tudoCerto = calculoDespesas >= 0;
    let respostaResultado = "negativo";

    if (tudoCerto) {
        respostaResultado = "Positivo";
    }

    console.log(`Seus saldo é ${respostaResultado}: ${calculoDespesas.toFixed(2)} reais.`);
}

gastoFamiliar();