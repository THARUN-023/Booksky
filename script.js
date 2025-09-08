var four = document.querySelector(".four")
var popupbox= document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    four.style.display = "block"
    popupbox.style.display = "block"
})


var cancelbox = document.getElementById("cancel-box")

/*cancelbox.addEventListener("click",function(event){
     event.preventDefault()
     four.style.display = "none"
     popupbox.style.display = "none"
})*/
 function cancel(){
    four.style.display = "none"
    popupbox.style.display = "none"
 }

 var two = document.querySelector(".two")
 var addbook = document.getElementById("add-book")
 var booktitleinput = document.getElementById("book-title-input")
 var bookauthorinput = document.getElementById("book-author-input")
 var bookdesctiptioninput = document.getElementById("book-desctiption-input")

function push(){
    var div = document.createElement("div")
    div.setAttribute("class","three")
    div.innerHTML=`
    <h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdesctiptioninput.value}</p>
    <button>Delete<button>`
    two.appendChild(div)
    four.style.display = "none"
    popupbox.style.display = "none"

}
