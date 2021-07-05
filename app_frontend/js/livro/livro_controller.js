function iniciaLivros(){
    carregarLivros()
}

function carregarLivros() {
    listarLivros((erro, livros) => {
        console.log(livros);
        renderTabela(livros);
    })
}

function carregarForm(livros){
    renderForm(livros);
}

function salvarLivro(livros){
    if(!livros.id) {
        inserirLivro(livros, (erro,livros)=> {
            carregarLivros();
            limparCampos();
        })    
    }
    else {
        atualizarLivro(livros.id, (erro, livros) => {
            carregarLivros();
            limparCampos();
        })
    }
}

//Eventos
function onSalvar(livros){
    console.log("Livro: "+ livros);
    salvarLivro (livros)
}

function onCancelar(){
    carregarLivros();
}

function onDeletar(id){
    deletarLivro(id, (erro, livros) => {
        alert(`Livro ${livros.livro} removido com sucesso!`);
        carregarLivro();
    });
}

function onEdit(id){
    buscarLivro(id, (erro, livros) => {
        console.log("Carregando Livro "+livros.livro);
        carregarForm(livros);
    });
}



