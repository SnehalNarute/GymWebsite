burger = document.querySelector('.burger');
menu = document.querySelector('#menu')
menu1 = document.querySelector('#menu1');

burger.addEventListener('click',()=>{
    var x = document.getElementById('menu1');
    x.classList.toggle('show');
    var y = document.getElementById('menu');
    y.classList.toggle('show');
})





// function myFuction(){
//     var x = document.getElementById('menu');
//     x.classList.toggle('show');
// }
