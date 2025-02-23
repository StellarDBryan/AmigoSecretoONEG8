// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


const entrada_amigo = document.getElementById('amigo');  
const agregarBtn = document.getElementsByClassName('button-add');
const sortaerBtn = document.getElementsByClassName('button-draw'); 
const lista = document.getElementById('listaAmigos'); 
const resultado = document.getElementById('resultado');

let listaAmigos = []; 

// agregarBtn.addEventListener('click', agregarAmigo()); 

function agregarAmigo () {
    listaAmigos.push(entrada_amigo.value); 
    actualizarLista(); 
    entrada_amigo.value = ''; 
    console.log(listaAmigos);
} 

function actualizarLista () {
    const nuevoAmigo = document.createElement('li'); 
    nuevoAmigo.textContent = entrada_amigo.value;
    lista.appendChild(nuevoAmigo); 
}