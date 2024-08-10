struct ListNode {
  int valor;
  ListNode *siguiente;
  ListNode() : valor(0), siguiente(nullptr) {}
  ListNode(int x) : valor(x), siguiente(nullptr) {}
  ListNode(int x, ListNode *siguiente) : valor(x), siguiente(siguiente) {}
};

ListNode* oddEvenList(ListNode* cabeza) {
  if (cabeza == nullptr || cabeza->siguiente == nullptr) {
    return cabeza;
  }

  ListNode* impar = cabeza;
  ListNode* par = cabeza->siguiente;
  ListNode* cabezaPar = par;

  while (par != nullptr && par->siguiente != nullptr) {
    impar->siguiente = par->siguiente;
    impar = impar->siguiente;
    par->siguiente = impar->siguiente;
    par = par->siguiente;
  }

  impar->siguiente = cabezaPar;

  return cabeza;
}
