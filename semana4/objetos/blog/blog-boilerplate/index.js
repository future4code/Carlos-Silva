let clicar = () => {
  let valorTitulo = document.getElementById("titulo-post");

  let valorAutor = document.getElementById("autor-post");

  let valorConteudo = document.getElementById("conteudo-post");

  let container = document.getElementById("container-de-posts");

  let infos = {
    titulo: valorTitulo,
    autor: valorAutor,
    conteudo: valorConteudo,
  };

  let arrayDeObjetos = [infos];

  console.log(arrayDeObjetos);

  container.innerHTML += `<div> <br> ${valorTitulo.value} <br> ${valorAutor.value} <br> ${valorConteudo.value}</div>`;

  valorTitulo.value = "";
  valorAutor.value = "";
  valorConteudo.value = "";
};
