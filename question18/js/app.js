const calcular_resultados = () => {
    // * Faça seu código aqui
    event.preventDefault();
    let quant_dias_sem_acidentes = Number(document.getElementById('quant_dias_sem_acidentes').value);

    let calculo_anos = quant_dias_sem_acidentes / 365;
    let calculo_meses = quant_dias_sem_acidentes /30;
    let calculo_dias = quant_dias_sem_acidentes;
    
    document.getElementById('anos').innerHTML= calculo_anos;
    document.getElementById('meses').innerHTML= calculo_meses.toFixed(2);
    document.getElementById('dias').innerHTML= calculo_dias;
}
