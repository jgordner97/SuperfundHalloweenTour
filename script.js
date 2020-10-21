// const btn1 = document.querySelector('#btn__table--1');
// const info1 = document.querySelector('.site__table--1')

// btn1.addEventListener('click', function(){
//     info1.classList.toggle('nodisplay');

//     if(info1.classList.contains('nodisplay')){
//         btn1.textContent = "Show Table";
//     }else {
//         btn1.textContent = "Hide Table";
//     }
// })

const tableBtns = document.querySelectorAll('.btn__site--table');

tableBtns.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const infoTable = e.currentTarget.nextElementSibling;
        infoTable.classList.toggle("nodisplay")

    })
})
const crosswordPrint = document.querySelector(".crossword__print")

function printimage(){
    var URL = "https://crosswordlabs.com/embed/superfund-halloween-tour-2";

    var W = window.open(URL);

    W.window.print();
}

crosswordPrint.addEventListener("click", printimage);

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
