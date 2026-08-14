const form = document.querySelector("form");

const email = form.querySelector('input[type="email"]');
const senha = form.querySelector('input[type="password"]');
const botao = form.querySelector("button");

botao.addEventListener("click", function(event) {

    event.preventDefault();

    const emailValor = email.value.trim();
    const senhaValor = senha.value;

    // Verifica se os campos estão preenchidos
    if (emailValor === "" || senhaValor === "") {
        alert("Preencha todos os campos.");
        return;
    }

    // Verifica o e-mail e a senha
    if (emailValor !== "juan@email" || senhaValor !== "juan123") {
        alert("E-mail ou senha incorretos.");
        return;
    }

    // Login correto
    alert("Login realizado com sucesso!");

    window.location.href = "../html/inicio.html";
});