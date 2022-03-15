const calcular_resultados = () => {
    // * Faça seu código aqui
    event.preventDefault();
    let nome = document.getElementById('nome_pessoa').value;
    let idade_pessoa= Number (document.getElementById('idade_pessoa').value);

    const dias_vividos= idade_pessoa * 365;

    document.getElementById('nomePessoa').innerHTML= nome;
    document.getElementById('dias_vida').innerHTML= dias_vividos;
};