function renderForm(livros) {
    //Se produto estiver indefinido, cria novo produto.
    if(!livros) {
        livros = {};
    }
    
    var str = `
    <h2>Formulario de Livros</h2>
    <form id="formulario">
        <label for="txtnome">Nome do Livro:</label>
        <input type="text" id="txtnome" value="${livros.livro ?livros.livro : ''}">
        <br />
        <label for="txtisbn">ISBN:</label>
        <input type="text" id="txtisbn" value="${livros.isbn ?livros.isbn : ''}">
        <br />
        <input type="submit" id="btnsalvar" value="Salvar">
        <input type="reset" value="Cancelar">
        <br />
    </form>
    `;

    let containerForm = document.querySelector("main");
    containerForm.innerHTML = str;

    var form = document.querySelector("#formulario");

    form.onsubmit = function(event){
        event.preventDefault();
        onSalvar(getDataLivro(livros));            
    }

    form.onreset = function(event){
        event.preventDefault();
        onCancelar();
    }
    
}

function getDataLivro(livros){
    livros.livro = document.querySelector("#txtnome").value;
    livros.isbn = document.querySelector("#txtisbn").value;
    return livros;
}

function limparCampos(){
    document.querySelector("#txtnome").value="";
    document.querySelector("#txtisbn").value="";
}

