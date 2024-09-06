class Nodo {
	constructor(valor, siguiente) {
		this.valor = valor === undefined ? 0 : valor;
		this.siguiente = siguiente === undefined ? null : siguiente;
	}
}

var reorderList = function (cabeza) {
	if (!cabeza || !cabeza.siguiente || !cabeza.siguiente.siguiente) return null;

	let rapido = cabeza.siguiente;
	let lento = cabeza;
	while (rapido && rapido.siguiente) {
		rapido = rapido.siguiente.siguiente;
		lento = lento.siguiente;
	}

	let actual = lento.siguiente;
	let anterior = null;
	let tmp;
	while (actual) {
		tmp = actual.siguiente;
		actual.siguiente = anterior;
		anterior = actual;
		actual = tmp;
	}

	let p1 = cabeza;
	let p2 = anterior;
	while (p2) {
		tmp = p1.siguiente;
		p1.siguiente = p2;
		p1.siguiente.siguiente = tmp;
		p2 = p2.siguiente;
		p1 = tmp;
	}
};
