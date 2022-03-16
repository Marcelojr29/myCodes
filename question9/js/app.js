// * Faça seu código aqui. Use console.log apenas para exibir o resultado. 
// * Ao carregar o HTML deste exercício, a resposta aparecerá no console do 
// * navegador. Para exibir a soma de todos os pares, use o document.getElementById
    let i = 85;
    let soma = Number(document.getElementById('soma-pares'.value));
        while (i < 908){
            const resto = i%2;
            if(resto == 0){
                console.log("Par " + i);
            }
           i = i + 1;
           soma = soma + 1;
        }
        console.log('Pare');
        document.getElementById('soma-pares').innerHTML = soma ;