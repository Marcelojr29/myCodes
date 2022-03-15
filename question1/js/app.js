const calcular_area = () => {
    // * Faça seu código aqui
    event.preventDefault();
    let raio = Number(document.getElementById('raio').value);
    let area_circulo = Math.PI * raio**2;

    document.getElementById('area_circulo').innerHTML = `O raio da circunferencia é ${area_circulo}`;
}