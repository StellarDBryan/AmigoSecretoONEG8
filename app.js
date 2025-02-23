// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


const entrada_amigo = document.getElementById('amigo');  
const agregarBtn = document.getElementsByClassName('button-add');
const sortaerBtn = document.getElementsByClassName('button-draw'); 
const listaAmigos = document.getElementById('listaAmigos'); 
const resultado = document.getElementById('resultado');

let amigos = []; 

function agregarAmigo () {
    amigos.push(entrada_amigo.value); 
    actualizarLista(); 
    entrada_amigo.value = ''; 
    console.log(amigos);
} 

function actualizarLista () {
    const nuevoAmigo = document.createElement('li'); 
    nuevoAmigo.textContent = entrada_amigo.value;
    listaAmigos.appendChild(nuevoAmigo); 
}

function sortearAmigo () {
    const numeroAleatorio = Math.floor(Math.random() * amigos.length) + 1; 
    const amigoSecreto = document.createElement('li'); 
    amigoSecreto.textContent = `¡${amigos[numeroAleatorio - 1]}!`;
    resultado.appendChild(amigoSecreto);

    listaAmigos.innerHTML = ''; 
}