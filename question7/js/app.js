const calcular_reajuste = () => {
    event.preventDefault();

    let salario = Number(document.getElementById('salario_funcionario').value);

    if(salario <= 1500 && salario < 1750){
        salario = salario + (12/100);
    } else if(salario <= 1750 && salario < 2000){
        salario = salario + (10/100);
    } else if(salario <= 2000 && salario < 3000){
        salario = salario + (7/100);
    } else {
        salario = salario + (5/100);
    }

    document.getElementById('reajuste-salario').innerHTML = `O salário é de: ${salario}`;
    
}

/**Crie o algoritmo Funcionario para calcular o aumento salarial de um empregado. Por padrão, o
aumento será de 15%. Entretanto, deve ser aplicada uma regra diferente para cada faixa salarial.
Regras:
a) se 1.500,00 <= salarioAtual < 1.750,00: aumento igual a 12%
b) se 1.750,00 <= salarioAtual < 2.000,00: aumento igual a 10%
c) se 2.000,00 <= salarioAtual < 3.000,00: aumento igual a 7%
d) se salarioAtual acima de 3.000,00: aumento igual a 5% */