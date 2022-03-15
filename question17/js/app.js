const calcular_resultados = () => {
    // * Faça seu código aqui
    event.preventDefault();
    let quant_hamburgers= Number(document.getElementById('quant_hamburgers').value);
    const queijo= 0.05;
    const presunto= 0.05;
    const rodela= 0.1;

    let quantq= quant_hamburgers * (2 * queijo);
    let quantp= quant_hamburgers * (1 * presunto);
    let quantc= quant_hamburgers * (1 * rodela);

    document.getElementById('quilos_queijo').innerHTML= quantq;
    document.getElementById('quilos_presunto').innerHTML= quantp;
    document.getElementById('quilos_carne').innerHTML= quantc;
};
/**A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de
queijo, uma fatia de presunto e uma rodela de hambúrguer. Sabendo que cada fatia de queijo ou
presunto pesa 50 gramas, e que a rodela de hambúrguer pesa 100 gramas, faça um algoritmo em que
o dono forneça a quantidade de sanduíches a fazer, e a máquina informe as quantidades (em quilos)
de queijo, presunto e carne necessários para compra. */