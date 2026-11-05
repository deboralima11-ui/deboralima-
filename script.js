const botao = document.querySelectorAll("button")

botoes:array.forEach(function (botao) 
    let curtiu= false;
    botao.addEventListener("click" , botaoClicado);
    funiction botaoClicado() {
        let texto = botao.querySelectorAll("span");
        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
        } else {
            texto.textContent--;
            curtiu = false;
        }
    }

)
