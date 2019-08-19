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
		'DECLIVE',
	];
	return lista[Math.floor(Math.random() * 13)]
}

var neon = document.querySelector('#texto');
neon.textContent = "EL NEÓN ES " + elNeonEs();
