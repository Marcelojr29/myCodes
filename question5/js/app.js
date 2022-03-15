const calcular_soma_maiores = () => {
    // * Faça seu código aqui
   event.preventDefault();
    let valorA = Number(document.getElementById('valor_a').value);
    let valorB = Number(document.getElementById('valor_b').value);
    let valorC = Number(document.getElementById('valor_c').value);

    const resultado = (valorA + valorB);
    if(resultado > valorC){
        console.log('maior que C');
    } else if(resultado < valorC){
        console.log('menor que c');
    } else {
        console.log('igual a c');
    }

    document.getElementById('valor_a').innerHTML = valorA;
    document.getElementById('valor_b').innerHTML = valorB;
    document.getElementById('valor_c').innerHTML = valorC;
    document.getElementById('resultado').innerHTML = `O resultado é: ${resultado}`;

}

/* Faça um algoritmo que leia os valores A, B e C. Mostre uma mensagem que informe se a soma de A
com B é menor, maior ou igual a C.
*/