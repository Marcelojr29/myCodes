const calcular_numeros = () => {
    // * Faça seu código aqui
    event.preventDefault();
    const num_1 = Number(document.getElementById('numero_1').value);
    const num_2 = Number(document.getElementById('numero_2').value);
    const num_real = Number(document.getElementById('numero_3').value);

    let db = num_1 * 2 * (num_2 / 2);
    // O produto do dobro do primeiro com metade do segundo
    let tp = num_1 * 3 + num_real;
    // A soma do triplo do primeiro com o terceiro.
    let cb = num_real ** 3;
    // O terceiro elevado ao cubo.

    document.getElementById('primeiro-calculo').innerHTML = `O resultado é ${db}`;
    document.getElementById('segundo-calculo').innerHTML = `O resultado é ${tp}`;
    document.getElementById('terceiro-calculo').innerHTML = `O resultado é ${cb}`;
}