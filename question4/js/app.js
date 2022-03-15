const calcular_peso_ideal = () => {
    // * Faça seu código aqui
    event.preventDefault();
    let alt = Number(document.getElementById('altura').value);
    let peso = (72.7*alt) - 58;
    if(peso > alt){
        console.log('Acima do peso');
    } else if(peso == alt){
       console.log('Dentro do peso');
    } else{
        console.log('Abaixo do peso');
    }

    document.getElementById('peso_ideal').innerHTML = `O seu peso é de ${peso.toFixed(2)}`;
}
/**Tendo como dados de entrada a altura de uma pessoa, 
construa um algoritmo que calcule seu peso ideal,
usando a seguinte fórmula: (72.7*altura) – 58*/