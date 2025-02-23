// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


const entrada_amigo = document.getElementById('amigo');  
const agregarBtn = document.getElementsByClassName('button-add');
const sortaerBtn = document.getElementsByClassName('button-draw'); 

let listaAmigos = []; 

// agregarBtn.addEventListener('click', agregarAmigo()); 

function agregarAmigo () {
    listaAmigos.push(entrada_amigo.value); 
    entrada_amigo.value = ''; 
    console.log(listaAmigos);
}