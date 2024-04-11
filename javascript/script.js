function SignUp() {
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var con_email = document.getElementById("con_email").value;
    var senha = document.getElementById("senha").value;
    var con_senha = document.getElementById("con_senha").value;
    var tel = document.getElementById("telefone").value;

    var conf = 0

    if (con_email != email) {
        document.getElementById("con_email").value = ""
        conf = 1
    }

    if (con_senha != senha) {
        document.getElementById("con_senha").value = ""
        conf = 1
    }

    if (conf == 0) {
        localStorage.setItem('nome', nome)
        localStorage.setItem('sobrenome', sobrenome)
        localStorage.setItem('username', username)
        localStorage.setItem('email', email)
        localStorage.setItem('senha', senha)
        localStorage.setItem('telefone', tel)
    }
}

function login() {
    var username = document.getElementById("username").value;
    var senha = document.getElementById("senha").value;

    var correct_username = localStorage.getItem("username")
    var correct_senha = localStorage.getItem("senha")

    if (correct_username == username && correct_senha == senha){
        alert ("Entrou!")
    }
    else {
        alert("Usuário/senha incorreto.")
    }
}


