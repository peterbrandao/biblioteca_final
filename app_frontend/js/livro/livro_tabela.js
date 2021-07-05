

function renderTabela(livros){
    var str=`
    <h3>Tabela de Livros</h3>
    <a id='novo' href="#">Novo</a>
    <div id="tabela">

    <table>
        <tr>
            <th style='text-align: left;'>Id</th>
            <th style='text-align: left;'>Nome do Livro</th>
            <th style='text-align: left;'>ISBN</th>
            <th colspan="2">Ação</th>
        </tr>`;

    for(var i in livros){
        str+=`<tr id=${livros[i].id}>
                <td>${livros[i].id}</td>
                <td>${livros[i].livro}</td>
                <td>${livros[i].isbn}</td>
                <td><a class="edit" href="#" 
                    data-id="${livros[i].id}">Editar</a></td>
                <td><a class="delete" href="#" 
                    data-id="${livros[i].id}">Deletar</a></td>
            </tr>`;
            
    } 
    str+= `
    </table>
    </div>`;

    var tabela = document.querySelector("main");
    tabela.innerHTML = str;

    var linkNovo = document.querySelector("#novo");
    linkNovo.onclick = function(event){
        carregarForm();
    }

    const linksEdit = document.querySelectorAll(".edit");
    for(let linkEdit of linksEdit) {
        linkEdit.onclick = function(event){
            onEdit(event.target.getAttribute("data-id"));
        }
    }

    const linksDelete = document.querySelectorAll(".delete");
    for(let linkDelete of linksDelete) {
        linkDelete.onclick = function(event){
            onDeletar(event.target.getAttribute("data-id"));
        }
    }

}