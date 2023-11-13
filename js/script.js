const botao = document.querySelector("#botaoTema")
// addEventListener = adicionar um "ouvidor" de eventos
 botao.addEventListener("click",modo)

function  modo(){
    // document = html
    //  queryselector = selecionar elementos
    let body = document.querySelector("body")
    let atualTemaclaro = document.querySelector("#temaAtualClaro")
    let atualTemaEscuro = document.querySelector("#temaAtualEscuro")
    
    
    if(botao.checked){
        // setAtribute(atributo,valor)
        body.setAttribute("data-bs-theme","dark")
       atualTemaclaro.style.display = "none"
       atualTemaEscuro.style.display = "block"

    } else{
        body.setAttribute("data-bs-theme","light")
        atualTemaclaro.style.display = "block"
        atualTemaEscuro.style.display = "none"

    }

}