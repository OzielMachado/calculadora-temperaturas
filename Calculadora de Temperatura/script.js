function converterTemperaturas() { 
	var inCelsius = document.getElementById("inCelsius");
	var inFahrenheit = document.getElementById("inFahrenheit");
	var inKelvin = document.getElementById("inKelvin");
	var inRankine = document.getElementById("inRankine");

	var celsius = Number(inCelsius.value);
	var fahrenheit = Number(inFahrenheit.value);
	var kelvin = Number(inKelvin.value);
	var rankine = Number(inRankine.value);

	if(celsius == "" && fahrenheit == "" && kelvin == "" && rankine == "" || isNaN(celsius) || isNaN(fahrenheit) || isNaN(kelvin) || isNaN(rankine) ) {
		alert("Insira um valor válido!");
		limpar();
		return;
	}
	
	if(celsius != "" && fahrenheit == "" && kelvin == "" && rankine == ""){
		fahrenheit = ((celsius / 5) * 9) + 32;
		inFahrenheit.value = fahrenheit;
		kelvin = celsius + 273.15;
		inKelvin.value = kelvin;
		rankine = celsius * 1.8 + 491.67;
		inRankine.value = rankine;
	}
	
	if(celsius == "" && fahrenheit != "" && kelvin == ""){
		celsius = ((fahrenheit - 32) / 9) * 5;
		inCelsius.value = celsius;
		kelvin = celsius + 273.15;
		inKelvin.value = kelvin;
		rankine = celsius * 1.8 + 491.67;
		inRankine.value = rankine;
	}
	
	if(celsius == "" && fahrenheit == "" && kelvin != "" && rankine == "") {
		celsius = kelvin - 273.15;
		inCelsius.value = celsius;
		fahrenheit = ((celsius / 5) * 9) + 32;
		inFahrenheit.value = fahrenheit;
		rankine = celsius * 1.8 + 491.67;
		inRankine.value = rankine;
	}

	if(celsius == "" && fahrenheit == "" && kelvin == "" && rankine != "") {
		celsius = (rankine - 491.67) / 1.8;
		inCelsius.value = celsius;
		fahrenheit = ((celsius / 5) * 9) + 32;
		inFahrenheit.value = fahrenheit;
		kelvin = celsius + 273.15;
		inKelvin.value = kelvin;
	}
	
	inCelsius.focus();
}
var btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click",converterTemperaturas); 

function limpar(){
	inCelsius.value = "";
	inFahrenheit.value = "";
	inKelvin.value = "";
	inRankine.value = "";
	inCelsius.focus();
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click",limpar); 