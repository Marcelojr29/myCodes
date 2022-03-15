const calcular_resultados = () => {
    // * Faça seu código aqui
    event.preventDefault();
    let quantPaes = Number(document.getElementById('quantidade_paes').value);
    let quantBroas = Number(document.getElementById('quantidade_broas').value);
    const broa = 1.50;
    const paozin = 0.12;
    let totalVend = (quantPaes * paozin) + (quantBroas * broa);
    let totalArrec = totalVend*10/100;

    document.getElementById('total-venda').innerHTML= totalVend;
    document.getElementById('arrecadacao').innerHTML= totalArrec;
}
/**A padaria Hotpão vende uma certa quantidade de pães franceses e uma quantidade de broas a
cada dia. Cada pãozinho custa R$ 0,12 e a broa custa R$ 1,50. Ao final do dia, o dono quer saber quanto
arrecadou com a venda dos pães e broas (juntos), e quanto deve guardar numa conta de poupança
(10% do total arrecadado). Você foi contratado para fazer os cálculos para o dono. Com base nestes
fatos, faça um algoritmo para ler as quantidades de pães e de broas, e depois calcular os dados
solicitados */