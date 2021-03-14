document.querySelector(".hamburguer").addEventListener("click", incluir_show_menu)

function incluir_show_menu(){
    document.querySelector(".container").classList.toggle("show-menu")
}

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#js").addEventListener("change", atualizarPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function(){
    
    const prazo = document.querySelector("#prazo").value

    if (prazo == 1){
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana`
    }
    else if(prazo > 1){
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    }

    atualizarPreco()
})

function atualizarPreco(){   
    const qtde = document.querySelector("#qtde").value
    const preco_pag = 100

    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    
    let preco = qtde * preco_pag;

    if (temJS) preco *= 1.1

    if (incluiLayout) preco += 500

    let taxaUrgencia = 1 - prazo*0.1;

    preco *= 1 + taxaUrgencia

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}

