let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {    
    
    if ( menu.classList.contains("menu-fechado") ) {
       
        menu.classList.remove("menu-fechado")

        
        iconeBarras.style.display = "none"

        
        iconeX.style.display = "inline"

    } else {
       
        menu.classList.add("menu-fechado")

        
        iconeX.style.display = "none"

        iconeBarras.style.display = "inline"

    }
}



onresize = () => {
    
    menu.classList.remove("menu-fechado")
    
    iconeBarras.style.display = "none"

    
    iconeX.style.display = "inline"
}


function formulario(event) {

    
    // Pegar os valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-texto").value

    // Organizar os valores em um objeto
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    // Enviar a requisição para a API
    // Método HTTP POST - Create/Criar -> Cadastrar um novo registro (solicitacao)
    fetch("http://localhost:3000/formulario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    // CASO SUCESSO
    .then(resposta => {   
        console.log(resposta);     
        
        // Limpar os inputs
        document.querySelector("#contato form").reset()

        // Mostrar um alert de sucesso
        alert("Solicitação enviada com sucesso!!! 👍")
    })
    // CASO ERRO
    .catch(erro => {
        console.log(erro);
        // Mostrar alert com msg de erro
        alert("Erro na requisição 😢")
    })
          
    event.preventDefault()
}