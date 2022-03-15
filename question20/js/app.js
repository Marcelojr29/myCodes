const calcular_resultados = () => {
    // * Faça seu código aqui
    event.preventDefault();
    let base_maior= Number(document.getElementById('base_maior').value);
    let base_menor= Number(document.getElementById('base_menor').value);
    let altura= Number(document.getElementById('altura').value);

    const calculo= ((base_maior + base_menor)*altura)/2;

    document.getElementById('area_trapezio').innerHTML= calculo;
    
}
/**Faça um algoritmo que calcule e mostre a área de um trapézio. Sabe-se que: A = (
    (base_maior + base_menor)*altura)/2*/
