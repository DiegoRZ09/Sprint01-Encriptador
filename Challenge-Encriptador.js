const input = document.querySelector(".ingresarTexto");
const resultado = document.querySelector(".resultado");
input.focus();

	function encriptar(oracionTecleada) {
		
		oracionTecleada = input.value;
        oracionTecleada = oracionTecleada.toLowerCase();
		oracionEncriptada = oracionTecleada.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
		
        resultado.value = oracionEncriptada;
        resultado.style.background = "white";
        input.value = "";
	}

	

	function desencriptar(oracionTecleada) {
		
        oracionTecleada = input.value;
        oracionTecleada = oracionTecleada.toLowerCase();
		oracionDesencriptada = oracionTecleada.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
		
        resultado.value = oracionDesencriptada;
        resultado.style.background = "white";
        input.value = "";
    }

    function copiar(){
        resultado.select();
        navigator.clipboard.writeText(resultado.value);
        resultado.value = "";
        alert("Texto copiado en el portapapeles");
    }