
let jugadores = parseInt(prompt("Ingresa el número de jugadores"));
console.log (`El número de jugadores es ${jugadores}`);

function turnoJugador(){
    if ((jugadores > 1) && (jugadores <= 4)){
        let turno = parseInt(prompt("¿A qué jugador le toca tirar?"))
    console.log(`Es turno de jugador ${turno}`);
}
}

function numeroJugadores(){
    let numeroJugadores = jugadores;
    if ((numeroJugadores === 1)){
        alert ("Se necesitan más jugadores");
    } else if (numeroJugadores > 4){
        alert ("Se ha excedido el número de jugadores");
    }
}   

turnoJugador();

numeroJugadores();
    
    
if ((jugadores > 1) && (jugadores <= 4)){
    
    let boton1 = document.querySelector("#boton1");
    boton1.onclick = tirarDado1;
    
    let boton2 = document.querySelector("#boton2");
    boton2.onclick = tirarDado2;
}
    
function tirarDado1() {
        let dado1 = () => {
            return Math.ceil(Math.random() * 6);
        }
        console.log(`El valor del primer dado es ${dado1()}`);
        
}
    
function tirarDado2() {
        let dado2 = () => {
            return Math.ceil(Math.random() * 6);
        }
        console.log(`El valor del segundo dado es ${dado2()}`);
        alert("Es hora del siguiente turno");
        
        class jugador {
            constructor(nombre, casilla, puntos)
            {
                this.nombre = nombre;
                this.casilla = casilla;
                this.puntos = puntos;
                this.puntosAnteriores = 1; 
            }
            agregarPuntos(puntosNuevos) {
                this.puntosAnteriores += puntosNuevos;
            };
        }
        const jugador1 = new jugador("jugador1", 5, 3)
        
        console.log(jugador1);

        console.log("Siguiente turno");  

        
        turnoJugador();


}

