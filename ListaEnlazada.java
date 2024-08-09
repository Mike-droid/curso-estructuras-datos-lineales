class Nodo {
  protected int valor;
  protected Nodo siguiente;
  protected Nodo anterior;

  public Nodo(int x) {
    this.valor = x;
    this.siguiente = null;
    this.anterior = null;
  }

  public void agregarNodoSiguiente(Nodo nodoSiguiente) {
    this.siguiente = nodoSiguiente;
  }

  public void agregarNodoAnterior(Nodo nodoAnterior) {
    this.anterior = nodoAnterior;
  }

  public int actualizarValor(int nuevoValor) {
    this.valor = nuevoValor;
    return this.valor;
  }
}

class ListaEnlazada {
  protected Nodo cabeza;
  protected Nodo cola;

  public ListaEnlazada(Nodo primerNodo) {
    this.cabeza = primerNodo;
    this.cola = primerNodo;
  }

  public void insertarNodoAlFinal(Nodo nuevoNodo) {
    this.cola.siguiente = nuevoNodo;
    this.cola = cola.siguiente;
  }

  public void borrarNodo(Nodo nodo) {
    nodo.siguiente = null;
  }

  public Nodo buscarNodo(int valorABuscar) {
    Nodo actual = this.cabeza;
    while (actual != null) {
      if (actual.valor == valorABuscar) {
        return actual;
      }
      actual = actual.siguiente;
    }
    return null;
  }

  public void borrarNodoPorValor(int valor) {
    Nodo nodoABorrar = buscarNodo(valor);

    if (nodoABorrar != null) {
      nodoABorrar.siguiente = null;
    }
  }
}
