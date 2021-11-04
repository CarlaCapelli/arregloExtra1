function miFuncion(cant: number, valor: string) {
  cant = Number(prompt("cantidad de elementos"));
  valor = String(prompt("valor del arreglo"));

  let arreglo: string[] = new Array(cant);
  for (let i: number = 0; i < cant; i++) {
    arreglo[i] = valor;
    console.log(arreglo[i]);
  }
}
miFuncion();
