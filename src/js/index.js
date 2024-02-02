const btnPlataforma = document.querySelector(".btn-plataforma")

const elementoPlataforma = document.querySelector(".btn-plataforma .plataformas")

function btnClick() {
    const botaoAtivo = elementoPlataforma.classList.contains("ativo")

    if(botaoAtivo) {
        elementoPlataforma.classList.remove("ativo")
        
        const compreJa = document.querySelector(".compre-ja")
        compreJa.scrollIntoView({behavior: 'smooth'})

        
    }
    else {
        elementoPlataforma.classList.add("ativo")
        const autoPage = document.body.scrollHeight;
        window.scrollTo(0 , autoPage)
    }
}
btnPlataforma.addEventListener("click", btnClick)

