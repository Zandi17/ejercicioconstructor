window.addEventListener("load", function() {
	var button = document.getElementById("calcular");
	button.addEventListener("click", function() {
		var nombre = document.getElementById("ingresaNombre").value;
		var edad = parseInt(document.getElementById("ingresaEdad").value);
		var sexo = document.getElementById("ingresaSexo").value;
		
		function Persona(nombre, edad, sexo) {
 				this.nombre = nombre;
 				this.edad = edad;
  				this.sexo = sexo;
	  			this.hablar = function() {
				 	if ( edad >= 18){
				 		return `hola soy ${this.nombre} , y tengo ${this.edad} años soy mayor de edad`;
				 	}
				 	else {
				 		return `hola soy ${this.nombre} , y tengo ${this.edad} años soy menor de edad`;
				 	}
				}
		}
		var persona1 = new Persona(nombre,edad,sexo);
		var resultado = document.getElementById("resultado");
    		resultado.innerHTML = persona1.hablar();	
	});
		
});

