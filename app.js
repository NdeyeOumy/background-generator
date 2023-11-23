//console.log(window.document);

//récupération de l'élément input par son id firstColor
const fistColorElt = document.getElementById('firstColor');
//console.log(fistColorElt);

//récupération de l'élément input par son id secondColor
const secondColorElt = document.getElementById('secondColor');

//récupération de l'élément body
const bodyElt = document.querySelector('body');
console.log(bodyElt);


fistColorElt.addEventListener('input', function(){
    //console.log(fistColorElt.value);
    bodyElt.style = "background: linear-gradient(to right,"+fistColorElt.value+", "+secondColorElt.value+")";
});

secondColorElt.addEventListener('input', function(){
    //console.log(secondColorElt.value);
    bodyElt.style = `background: linear-gradient(to right,${fistColorElt.value}, ${secondColorElt.value})`;
});

