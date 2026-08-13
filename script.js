const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {
        let texto = botao.querySelector("span");
        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
            botao.style.backgroundColor = "#0056b3"; // Muda a cor ao clicar
        } else {
            texto.textContent--;
            curtiu = false;
            botao.style.backgroundColor = "#001f3f"; // Volta a cor original
        }
    }
})
