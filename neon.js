function elNeonEs() {
	var lista = [
		'MISERIA', 
		'DELIRIO',
		'INFARTO',
		'AMNESIA',
		'SECRETO',
		'DEMENCIA',
		'DESMAYO',
		'BLASFEMIA',
		'DESDICHA',
		'FASCISTA',
		'PLEGARIA',
		'LATIDO',
	];
	return lista[Math.floor(Math.random() * 12)]
}

var neon = document.querySelector('#texto');
neon.textContent = "EL NEÓN ES " + elNeonEs();
