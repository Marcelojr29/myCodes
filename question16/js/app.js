const calcular_resultados = () => {
    // * Faça seu código aqui
    event.preventDefault();
    const umCent = Number(document.getElementById('quant_moedas1cent').value);
    const cincoCent = Number(document.getElementById('quant_moedas5cent').value);
    const dezCent = Number(document.getElementById('quant_moedas10cent').value);
    const vinte_cincoCent = Number(document.getElementById('quant_moedas25cent').value);
    const cinquentaCent = Number(document.getElementById('quant_moedas50cent').value);
    const umReal = Number(document.getElementById('quant_moedas1real').value);

    let array_moeda = [
           {Moeda: '1', tipo: 'Centavos'},
           {Moeda: '5', tipo: 'Centavos'},
           {Moeda: '10', tipo: 'Centavos'},
           {Moeda: '25', tipo: 'Centavos'},
           {Moeda: '50', tipo: 'Centavos'},
           {Moeda: '1', tipo: 'Real'}
       ];
       const moeda = array_moeda.filter(function(value){
           return value.tipo === 'Centavos', 'Real';
           });
       console.log(moeda);

    let totalCentavos = ((umCent*0.01) + (cincoCent*0.05) + (dezCent*0.10) + (vinte_cincoCent*0.25) + (cinquentaCent*0.50))/100;
    let totalReais = (umReal*1.00) + totalCentavos;
    let totalEco = totalCentavos + totalReais;

    document.getElementById('total_refrig_litros').innerHTML = `O total economizado é de: ${totalEco.toFixed(2)}`;
}

/**Pedrinho tem um cofrinho com muitas moedas, e deseja saber quantos reais conseguiu poupar.
Faça um algoritmo para ler a quantidade de cada tipo de moeda, e imprimir o valor total economizado,
em reais. Considere que existam moedas de 1, 5, 10, 25 e 50 centavos, e ainda moedas de 1 real. Não
havendo moeda de um tipo, a quantidade respectiva é zero.

Dica: use if-else if-else para verificar se a quantidade de moedas é 0*/
