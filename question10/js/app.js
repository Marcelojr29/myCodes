const calcular_peso_altura = () => {
    // * Faça seu código aqui
    event.preventDefault();
    let nome1 = 'Marcelo';
    let nome2 = 'Junior';
    let peso1 = Number(document.getElementById('peso-pessoa1').value);
    let peso2 = Number(document.getElementById('peso-pessoa2').value);
    let altura1 = Number(document.getElementById('altura-pessoa1').value);
    let altura2 = Number(document.getElementById('altura-pessoa2').value);
    
    let maiorPeso = Math.max(peso1, peso2);
    let maiorAltura = Math.max(altura1, altura2);

    if(maiorPeso == peso1 > peso2){
        document.getElementById('pessoa-pesada').innerHTML = `A pessoa mais pesada é ${nome1} com ${peso1}kg`;
    } else if(maiorPeso == peso2 > peso1){
        document.getElementById('pessoa-pesada').innerHTML = `A pessoa mais pesada é ${nome2} com ${peso2}kg`;
    }
    if(maiorAltura == altura1 > altura2){
        document.getElementById('pessoa-alta').innerHTML = `A pessoa mais alta é ${nome1} com ${altura1}cm`;
    } else if(maiorAltura == altura2 > altura1){
        document.getElementById('pessoa-alta').innerHTML = `A pessoa mais alta é ${nome2} com ${altura2}cm`;
    }
    /**if(maiorPeso == peso1){
        console.log(`A pessoa de maior peso é ${nome1} com ${peso1}KG`);
    } else if(maiorPeso == peso2){
        console.log(`A pessoa de maior peso é ${nome2}com ${peso2}KG`);
    }
    if(maiorAltura == altura1){
        console.log(`A pessoa mais alta é ${nome1} com ${altura1}cm`);
    } else if(maiorAltura == altura2){
        console.log(`A pessoa mais alta é ${nome2} com ${altura2}cm`);
    }*/

    document.getElementById('peso-pessoa1').innerHTML = peso1;
    document.getElementById('peso-pessoa2').innerHTML = peso2;
    document.getElementById('altura-pessoa1').innerHTML = altura1;
    document.getElementById('altura-pessoa2').innerHTML = altura2;
    document.getElementById('pessoa-pesada').innerHTML = `A pessoa mais pesada é: ${maiorPeso}`;
    document.getElementById('pessoa-alta').innerHTML = `A pessoa mais alta é: ${maiorAltura}`;
  }
  /**Crie um algoritmo que peça o nome, a altura e o peso de duas pessoas e apresente o nome e peso
da mais pesada e o nome e altura da mais alta. */












/**Crie um algoritmo que peça o nome, a altura e o peso de duas pessoas e apresente o nome e peso
da mais pesada e o nome e altura da mais alta. */