

// document.querySelector("#username").addEventListener("change")

document.querySelector("#password").addEventListener("change",comparar_passwords)
document.querySelector("#conf-password").addEventListener("change", comparar_passwords)

function comparar_passwords(){

    var senha = document.querySelector("#password").value
    var conf_senha = document.querySelector("#conf-password").value
    
    if (senha != conf_senha){
        console.log('As senhas não correspondem!')
    }else{
        console.log('As senhas correspondem!')
    }

}