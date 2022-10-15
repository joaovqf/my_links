var abas = document.querySelectorAll(".aba")

abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        var abaSelecionada = document.querySelector(".aba.selecionado")
        abaSelecionada.classList.remove("selecionado")
        aba.classList.add("selecionado")

        var informacaoSelecionada = document.querySelector(".informacao.selecionado")
        informacaoSelecionada.classList.remove("selecionado")

        var idElementInfo = `informacao-${aba.id}`
        var showInfo = document.getElementById(idElementInfo)
        showInfo.classList.add("selecionado")
    })
})