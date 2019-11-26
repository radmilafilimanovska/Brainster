let sitebutoni = document.querySelectorAll('.keyB1'); 
let array = Array.from(sitebutoni);
let p = document.querySelector('.paragraph'); 
let h1 = document.querySelector('h1');

h1.addEventListener('animationend', btnAlert);

function btnAlert() {
alert('HI KEYBOARD WARRIOR')        
};


// for (let i = 0; i < array.length; i++) {
//     array[i].addEventListener('click', function(){
//         p.innerHTML += array[i].innerHTML; // so ova vika na paragrafot p, sto ni e prazen na pocetok dodavaj go ona sto ke go vidis vo sodrzinata na i-tiot element vo nizata array;
//     })
// }
// document.querySelector('.keyB11').addEventListener('click', function(){
//     p.innerHTML += '\u00A0\u00A0';
// });

array.forEach(function(singleButton) {
    singleButton.addEventListener('click', function(){
    p.innerHTML += singleButton.innerHTML;
});  document.querySelector('.keyB11').addEventListener('click', function(){
    p.innerHTML +=  ' '; // neznam zosto ne mi raboti ovde so ova '\u00A0\u00A0';, a so for loopot gore raboti
});
});



