const form = document.querySelector("form");

const nome = form.querySelector('input[type="name"]');
const email = form.querySelector('input[type="email"]');
const senha = form.querySelector('input[type="password"]');
const telefone = form.querySelector('input[type="tel"]');
const botao = form.querySelector("button");

botao.addEventListener("click", function(event) {

    event.preventDefault();

    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();
    const senhaValor = senha.value;
    const telefoneValor = telefone.value.trim();

    if (
        nomeValor === "" ||
        emailValor === "" ||
        senhaValor === "" ||
        telefoneValor === ""
    ) {
        alert("Preencha todos os campos.");
        return;
    }

    if (!emailValor.includes("@")) {
        alert("Digite um e-mail válido.");
        return;
    }

    if (senhaValor.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    if (telefoneValor.length < 10) {
        alert("Digite um telefone válido.");
        return;
    }

    alert("Cadastro realizado com sucesso!");

    window.location.href = "../html/login.html";
});