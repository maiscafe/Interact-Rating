var rating = document.querySelector(".flex-choices");
var btnChoices = document.querySelectorAll(".btnChoice")
var btnChoice = [];
btnChoice = Array.from(btnChoices);
rating.addEventListener("click", function(event){
    if(event.target.classList.contains("btnChoice")){ /* Evita a captação do click do usuário fora do btnChoice */
        nota = event.target; /* Captura o btnChoice clicado */
        if(nota.classList == "btnChoice"){ /* Verifica se o click foi dentro da area circular */
            for (let i = 0; i < rating.children.length;i++) {
                btnChoice[i].classList.remove("active")
            }
            nota.classList.add("active"); /* Adiciona o estado ativo */
        }
        /* Exibe ao usuário a nota que ele escolheu */
    
        document.querySelector("#span-rating").textContent = "You selected " + nota.textContent +  " out of 5" ;
    }

});



