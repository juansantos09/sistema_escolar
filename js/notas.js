function verificarAprovacao(media) {
    return media >= 6;
}

let media = 8;

if (verificarAprovacao(media)) {
    document.getElementById("resultado").innerHTML =
        "✓ Teste aprovado: aluno aprovado.";
} else {
    document.getElementById("resultado").innerHTML =
        "✗ Teste reprovado: aluno reprovado.";
}