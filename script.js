function contar(argument) {
	var inicio = document.getElementById('txtini')
	var fim = document.getElementById('txtfim')
	var passo = document.getElementById('txtpass')
	var res = document.getElementById('res')
	
	if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
		window.alert('DEU B.O')
	} else {
		res.innerHTML = 'CONTANDO:'
		var i = Number(inicio.value)
		var f = Number(fim.value)
		var p = Number(passo.value)

		if (p <= 0) {
			window.alert('O Passo e Invalido Considerando passo 1')
			p = 1
		}

		if (i < f ) {
			for (var c = i; c <= f; c += p) {
			res.innerHTML += `${c}  \u{1F449}`
			}
		} else {
			for (var c = i; c >= f; c -=p)
				res.innerHTML += `${c} \u{1F449}`
		}	
		res.innerHTML += `\u{1F3C1}`
	}
	
	
}