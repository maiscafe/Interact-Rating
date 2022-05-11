/* Hidden first page and show second page */
var firstPage = document.querySelector ("#first-page");
var secondPage = document.querySelector ("#second-page");
var alertSpan = document.querySelector ("#alert-span");
var btnSubmit = document.querySelector("#btnSubmit")
firstPage.style.display = "flex";
secondPage.style.display = "none";
alertSpan.style.display = "none";


btnSubmit.addEventListener("click", showSecondPage);
secondPage.addEventListener("click", 
function(){
    alertSpan.style.display = "flex";
    timer()
    });


function showFirstPage(){
    firstPage.style.display = "flex";
    secondPage.style.display = "none";
    alertSpan.style.display = "none";
}

function showSecondPage(){
    firstPage.style.display = "none";
    secondPage.style.display = "flex";
    alertSpan.style.display = "none";
}


function timer(){
    alertSpan.textContent = "You will be redirected to the home page in 5 seconds";
    setTimeout(function(){
        window.location.href = "index.html";
    }, 5000);
}