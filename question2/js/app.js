const calcular_area = function() {
    // * Faça seu código aqui
    event.preventDefault();
    
    const comp = Number(document.getElementById('comprimento').value);
    const lg = Number(document.getElementById('largura').value);

    let area_quadrado = comp * lg;
    let dobro_area_quadrado = area_quadrado ** 2;
     
    document.getElementById('area_quadrado').innerHTML= `O calculo é de ${area_quadrado}`;
    document.getElementById('dobro_area_quadrado').innerHTML = `Ò dobro da area é de ${dobro_area_quadrado}`;
}