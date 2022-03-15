const calcular_peso_altura = () => {
    // * Faça seu código aqui
    event.preventDefault();
  let nomePessoa = document.getElementById('nomePessoa').value;
  let nomePessoa2 = document.getElementById('nomePessoa2').value;
  let alturaPessoa = Number(document.getElementById('altura').value);
  let pesoPessoa = Number(document.getElementById('peso').value);
  

  let pessoa_pesada = Math.max(nomePessoa('peso'),nomePessoa2('peso'));
  let pessoa_alta = Math.max(nomePessoa('altura'), nomePessoa2('altura'));

  if(pessoa_pesada == nomePessoa(pesoPessoa)){
      document.getElementById('pessoa_pesada').innerHTML = `A pessoa de maior peso é ${nomePessoa}`;
  } else {
      document.getElementById('pessoa_pesada').innerHTML = `A pessoa de maior peso é ${nomePessoa2}`;
  }
  if(pessoa_alta == nomePessoa(alturaPessoa)){
      document.getElementById('pessoa_alta').innerHTML = `A pessoa mais alta é ${nomePessoa}`;
  } else {
      document.getElementById('pessoa_alta').innerHTML = `A pessoa mais alta é ${nomePessoa2}`;
  }









}


/**Crie um algoritmo que peça o nome, a altura e o peso de duas pessoas e apresente o nome e peso
da mais pesada e o nome e altura da mais alta. */