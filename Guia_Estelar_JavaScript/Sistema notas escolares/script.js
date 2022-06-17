/*
    # Guia Estelar JavaScript

    - Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas, 
    em caracteres tipo A B C.

    * de 90 para cima - A
    * entre 80 ~ 89 - B
    * entre 70 ~ 79 - C
    * entre 60 ~ 69 - D
    * menor que 60 - F

*/

function mostrarNota(nota) {
    // let nota = 101;
    let notaA = nota >= 90 && nota <= 100;
    let notaB = nota >= 80 && nota <= 89;
    let notaC = nota >= 70 && nota <= 79;
    let notaD = nota >= 60 && nota <= 69;
    let notaF = nota < 60 && nota >= 0;

    let notaFinal;

    if (notaA) {
        notaFinal = "A";
    } else if (notaB) {
        notaFinal = "B";
    } else if (notaC) {
        notaFinal = "C";
    } else if (notaD) {
        notaFinal = "D";
    } else if (notaF) {
        notaFinal = "F"
    } else {
        notaFinal = "Nota Inválida";
    }

    return notaFinal;
}

// Mudar notas
console.log(mostrarNota(99));
console.log(mostrarNota(70));
console.log(mostrarNota(105));
console.log(mostrarNota(50));
console.log(mostrarNota(89));