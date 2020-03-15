var campoFiltro = document.querySelector('#buscar-tabela');

campoFiltro.addEventListener('input', function(){
	 
	//metodo com regex
	console.log(this.value);
	var pacientes = document.querySelectorAll(".paciente");

		if(this.value.length > 0){
			
			for(var i = 0; i < pacientes.length; i++){

				var paciente = pacientes[i];
				var tdNome = paciente.querySelector(".info-nome");
				var nome = tdNome.textContent;
				var expressao = new RegExp(this.value, "i");

				if(!expressao.test(nome)){
					paciente.classList.add("invisivel");
				}else{
					paciente.classList.remove("invisivel");
				}
			}

		}else{
			for(var i = 0; i < pacientes.length; i++){
				var paciente = pacientes[i];
				paciente.classList.remove("invisivel");
			}
		}

	//metodo sem regex
	/*
	for(var i = 0; i < pacientes.length; i++){

		var paciente = pacientes[i];
		var nomeTd = paciente.querySelector('.info-nome');
		var nome = nomeTd.textContent;

		var comparavel = nome.substr(0, this.value.length);
		var comparavelMinusculo = comparavel.toLowerCase();
		var valorDigitadoMinusculo = this.value.toLowerCase();

		if(!(valorDigitadoMinusculo == comparavelMinusculo)) {

			paciente.classList.add('invisivel');
		} else {

			paciente.classList.remove('invisivel');
		}
	}
	*/
});