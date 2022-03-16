const calcular_desconto = () => {
    // * Faça seu código aqui  
    event.preventDefault();
    let salario = Number(document.getElementById('salario_funcionario').value);
    let desconto = salario*0.11;

    if(salario*0.11 > 318.20){
        desconto = 318.20;
    }else{}
    document.getElementById('desconto-total').innerHTML = desconto;
    
}

/**Crie um algoritmo que calcula o desconto previdenciário de um funcionário. Dado um salário, o
programa deve retornar o valor do desconto proporcional ao mesmo. O cálculo segue a regra: o
desconto é de 11% do valor do salário, entretanto, o valor máximo de desconto é 318,20. Sendo assim,
ou o algoritmo retorna o valor equivalente a 11% sobre o salário ou 318,20*/