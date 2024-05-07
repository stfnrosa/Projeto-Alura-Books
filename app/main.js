let livros = [];
const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi(){
    const resposta = await fetch(endpointDaApi);
    livros = await resposta.json();
    console.table(livros);
}

//Imagine que você tenha uma grande quantidade de livros. Sem o await, a função getBuscarLivrosDaAPI() retornaria a Promise imediatamente, e outras partes do seu código poderiam tentar acessar a variável livros antes dela estar devidamente preenchida, causando problemas de sincronização.