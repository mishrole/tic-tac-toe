//Turnos y jugadores

	var x = "x";
	var o = "o";
	var vacio = "+";
	var turno = o
	var xGanadas = 0;
	var oGanadas = 0;

function juego(clicked_id){

	var b1 = document.getElementById("b1")
	var b2 = document.getElementById("b2")
	var b3 = document.getElementById("b3")
	var b4 = document.getElementById("b4")
	var b5 = document.getElementById("b5")
	var b6 = document.getElementById("b6")
	var b7 = document.getElementById("b7")
	var b8 = document.getElementById("b8")
	var b9 = document.getElementById("b9")
	var xWins = document.getElementById("xWins");
	var oWins = document.getElementById("oWins");

	//Si turno == x, turno = o, de otro modo turno = x
	//Cumple con que X inicie la partida

	turno = (turno == x) ? o : x;

	//clicked_id toma this.id
	//setAttribute añade un atributo dentro de b1, disabled deshabilita el botón
	//style.color para cambiar estilo del value al hacer click, de #ccc a #fff

	if(clicked_id == "b1"){
		b1.value = turno
		b1.setAttribute("disabled","disabled")
		b1.style.color = "#fff"
	}else if(clicked_id == "b2"){
		b2.value = turno
		b2.setAttribute("disabled","disabled")
		b2.style.color = "#fff"
	}else if(clicked_id == "b3"){
		b3.value = turno
		b3.setAttribute("disabled","disabled")
		b3.style.color = "#fff"
	}else if(clicked_id == "b4"){
		b4.value = turno
		b4.setAttribute("disabled","disabled")
		b4.style.color = "#fff"
	}else if(clicked_id == "b5"){
		b5.value = turno
		b5.setAttribute("disabled","disabled")
		b5.style.color = "#fff"
	}else if(clicked_id == "b6"){
		b6.value = turno
		b6.setAttribute("disabled","disabled")
		b6.style.color = "#fff"
	}else if(clicked_id == "b7"){
		b7.value = turno
		b7.setAttribute("disabled","disabled")
		b7.style.color = "#fff"
	}else if(clicked_id == "b8"){
		b8.value = turno
		b8.setAttribute("disabled","disabled")
		b8.style.color = "#fff"
	}else if(clicked_id == "b9"){
		b9.value = turno
		b9.setAttribute("disabled","disabled")
		b9.style.color = "#fff"
	}

	function contador(){

		if(xGana == true){
			xGanadas = xGanadas + 1
			xWins.innerHTML = xGanadas
		}else if(oGana == true){
			oGanadas = oGanadas + 1
			oWins.innerHTML = oGanadas
		}
	}

	//Todos los casos en los que jugador X gana

	if((b1.value == x && b2.value == x && b3.value == x) ||
		(b4.value == x && b5.value == x && b6.value == x) ||
		(b7.value == x && b8.value == x && b9.value == x) ||
		(b1.value == x && b4.value == x && b7.value == x) ||
		(b2.value == x && b5.value == x && b8.value == x) ||
		(b3.value == x && b6.value == x && b9.value == x) ||
		(b1.value == x && b5.value == x && b9.value == x) ||
		(b3.value == x && b5.value == x && b7.value == x)){
		alert("Jugador X gana")
		var xGana = true;
		contador();

	//Todos los casos en jugador O gana

	}else if((b1.value == o && b2.value == o && b3.value == o) ||
		(b4.value == o && b5.value == o && b6.value == o) ||
		(b7.value == o && b8.value == o && b9.value == o) ||
		(b1.value == o && b4.value == o && b7.value == o) ||
		(b2.value == o && b5.value == o && b8.value == o) ||
		(b3.value == o && b6.value == o && b9.value == o) ||
		(b1.value == o && b5.value == o && b9.value == o) ||
		(b3.value == o && b5.value == o && b7.value == o)){
		alert("Jugador O gana")
		var oGana = true;
		contador();
	}

	//Nota: Si xGana u oGana son true, dependiendo del if de condiciones para jugadas ganadoras
	//		se remueve el atributo onclick y button para desenlazar la función e inhabilitar los clicks

	if(xGana === true || oGana === true){
		b1.removeAttribute("onclick", "button")
		b2.removeAttribute("onclick", "button")
		b3.removeAttribute("onclick", "button")
		b4.removeAttribute("onclick", "button")
		b5.removeAttribute("onclick", "button")
		b6.removeAttribute("onclick", "button")
		b7.removeAttribute("onclick", "button")
		b8.removeAttribute("onclick", "button")
		b9.removeAttribute("onclick", "button")
	}else if((b1.value == "x" || b1.value == "o") && (b2.value == "x" || b2.value == "o") &&
			(b3.value == "x" || b3.value == "o") && (b4.value == "x" || b4.value == "o") &&
			(b5.value == "x" || b5.value == "o") && (b6.value == "x" || b6.value == "o") &&
			(b7.value == "x" || b7.value == "o") && (b8.value == "x" || b8.value == "o") &&
			(b9.value == "x" || b9.value == "o")){
		alert("Es un empate")
	}
}


/*function contador(){

	if(xGana == true){
		contadorBoton = xGanadas + 1
		alert(contadorBoton)
	}else if(oGana == true){
		contadorBoton = oGanadas + 1
		alert(contadorBoton)
	}
}
*/

//Recargar al hacer click en el botón de Nueva partida

function nuevaPartida(){

	b1.value = vacio
	b1.style.color = "#ccc"
	b1.setAttribute("onclick", "juego(this.id)")
	b1.removeAttribute("disabled", "disabled")

	b2.value = vacio
	b2.style.color = "#ccc"
	b2.setAttribute("onclick", "juego(this.id)")
	b2.removeAttribute("disabled", "disabled")	

	b3.value = vacio
	b3.style.color = "#ccc"
	b3.setAttribute("onclick", "juego(this.id)")
	b3.removeAttribute("disabled", "disabled")	

	b4.value = vacio
	b4.style.color = "#ccc"
	b4.setAttribute("onclick", "juego(this.id)")
	b4.removeAttribute("disabled", "disabled")		

	b5.value = vacio
	b5.style.color = "#ccc"
	b5.setAttribute("onclick", "juego(this.id)")
	b5.removeAttribute("disabled", "disabled")	

	b6.value = vacio
	b6.style.color = "#ccc"
	b6.setAttribute("onclick", "juego(this.id)")
	b6.removeAttribute("disabled", "disabled")	

	b7.value = vacio
	b7.style.color = "#ccc"
	b7.setAttribute("onclick", "juego(this.id)")
	b7.removeAttribute("disabled", "disabled")	

	b8.value = vacio
	b8.style.color = "#ccc"
	b8.setAttribute("onclick", "juego(this.id)")
	b8.removeAttribute("disabled", "disabled")	

	b9.value = vacio
	b9.style.color = "#ccc"
	b9.setAttribute("onclick", "juego(this.id)")
	b9.removeAttribute("disabled", "disabled")

}