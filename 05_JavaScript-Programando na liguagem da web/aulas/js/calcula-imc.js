function validaPeso(peso) {
	if (peso >= 0 && peso < 1000){
		return true;
	}else {
		return false;
	}
}

function validaAltura(altura) {
	if (altura >= 0 && altura <= 3.00) {
		return true;
	}else {
		return false;
	}
}

function calculaImc(peso, altura) {
	return (peso / (altura * altura)).toFixed(2);
}

var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++) {
	
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector('.info-peso');
	var tdAltura = paciente.querySelector('.info-altura');
	var tdImc = paciente.querySelector('.info-imc');

	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;

	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);

	if(!pesoValido) {
		tdPeso.textContent = 'Peso inválido!';
		paciente.classList.add('paciente-invalido');
		pesoValido = false;
	}

	if(!alturaValida) {
		tdAltura.textContent = 'Altura inválida';
		paciente.classList.add('paciente-invalido');
		alturaValida = false;
	}

	if(pesoValido && alturaValida) {
		tdImc.textContent = calculaImc(peso, altura);
	}else {
		tdImc.textContent = 'Altura e/ou peso inválidos!'
	}	
}







