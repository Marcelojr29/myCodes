const calcular_resultados = () => {
    // * Faça seu código aqui
    event.preventDefault();
    let lata = Number(document.getElementById('quant_latas').value);
    let garrafinha = Number(document.getElementById('quant_garrafas_600').value);
    let garrafa = Number(document.getElementById('quant_garrafas_2l').value);

    const total_refrig_litros= (lata * 0.35) + (garrafinha * 0.6) + (garrafa * 2);

    document.getElementById('total_refrig_litros').innerHTML= total_refrig_litros.toFixed(2);
}

/**A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos: lata de 350 ml, garrafa
de 600 ml e garrafa de 2 litros. Se um comerciante compra uma determinada quantidade de cada
formato, faça um algoritmo para calcular quantos litros de refrigerante ele comprou. */