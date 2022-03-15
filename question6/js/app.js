const calcular_total_compras = () => {
    event.preventDefault();
  let nome = document.getElementById('nome_cliente').value;
  let quant_parafusos = Number(document.getElementById('quant_parafusos').value);
  let quant_porcas = Number(document.getElementById('quant_porcas').value);
  let quant_arruelas = Number(document.getElementById('quant_arruelas').value);

  const val_parafusos = 1.99;
  const val_porcas = 1.29;
  const val_arruelas = 0.79;

  const valor_1 = quant_parafusos * val_parafusos;
  const valor_2 = quant_porcas * val_porcas;
  const valor_3 = quant_arruelas * val_arruelas;

  const desconto = (valor_1 * 20/100) + (valor_2 * 10/100) + (valor_3 * 30/100);

  const total_compra_compra = (valor_1 + valor_2 + valor_3) - desconto;

  document.getElementById('nome_cliente_compra').innerHTML = nome;
  document.getElementById('quant_parafusos_compra').innerHTML = valor_1;
  document.getElementById('quant_porcas_compra').innerHTML = valor_2;
  document.getElementById('quant_arruelas_compra').innerHTML = valor_3;
  document.getElementById('quant_parafusos_compra').innerHTML = `R$ ${String(valor_1.toFixed(2)).replace('.',',')}`;
  document.getElementById('quant_porcas_compra').innerHTML = `R$ ${String(valor_2.toFixed(2)).replace('.',',')}`;
  document.getElementById('quant_arruelas_compra').innerHTML = `R$ ${String(valor_3.toFixed(2)).replace('.',',')}`;
  document.getElementById('total_desconto_compra').innerHTML = `O desconto é de: ${desconto.toFixed(2)}`;
  document.getElementById('total_compra_compra').innerHTML = `O total da compra é: ${total_compra_compra.toFixed(2)}`;
}