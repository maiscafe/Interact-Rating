/* Hidden first page and show second page */
var firstPage = document.querySelector ("#first-page");
var secondPage = document.querySelector ("#second-page");
var alertSpan = document.querySelector ("#alert-span");
var btnSubmit = document.querySelector("#btnSubmit")
firstPage.style.display = "flex";
secondPage.style.display = "none";
alertSpan.style.display = "none";


    btnSubmit.addEventListener("click", showSecondPage);
    secondPage.addEventListener("click",showAlert);


function showFirstPage(){
    firstPage.style.display = "flex";
    secondPage.style.display = "none";
}

function showSecondPage(){
    firstPage.style.display = "none";
    secondPage.style.display = "flex";
}

function showAlert(){
    alert("Thank you for your submission!");
}