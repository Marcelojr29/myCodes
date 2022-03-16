const calcular_reajuste = () => {
    event.preventDefault();
    let salario = Number(document.getElementById('salario_funcionario').value);
    const valor_1 = 1500 + 12/100;
    const valor_2 = 1750 + 10/100;
    const valor_3 = 2000 + 7/100;
    const valor_4 = 3000 + 5/100;

    if(salario >= 1500 && salario < 1750){
        salario = valor_1;
        document.getElementById('reajuste-salario').innerHTML = salario;
    } else if(salario >= 1750 && salario < 2000){
        salario = valor_2;
        document.getElementById('reajuste-salario').innerHTML = salario;;
    } else if(salario >= 2000 && salario < 3000){
        salario = valor_3;
        document.getElementById('reajuste-salario').innerHTML = salario;
    } else {
        salario = valor_4;
        document.getElementById('reajuste-salario').innerHTML = salario;
    }
}

/**if(salario < 1500){
        document.getElementById('reajuste-salario').innerHTML = `${salario} + ${valor_1}`;
    } else if(salario < 1750){
        document.getElementById('reajuste-salario').innerHTML = `${salario} + ${valor_2}`;
    } else if(salario < 2000){
        document.getElementById('reajuste-salario').innerHTML = `${salario} + ${valor_3}`;
    } else{
        document.getElementById('reajuste-salario').innerHTML = `${salario} + ${valor_4}`;
    }
     document.getElementById('reajuste-salario').innerHTML = `O salário atual é de: ${salario}`;*/
    
 /**Crie o algoritmo Funcionario para calcular o aumento salarial de um empregado. Por padrão, o
aumento será de 15%. Entretanto, deve ser aplicada uma regra diferente para cada faixa salarial.
Regras:
a) se 1.500,00 <= salarioAtual < 1.750,00: aumento igual a 12%
b) se 1.750,00 <= salarioAtual < 2.000,00: aumento igual a 10%
c) se 2.000,00 <= salarioAtual < 3.000,00: aumento igual a 7%
d) se salarioAtual acima de 3.000,00: aumento igual a 5% */