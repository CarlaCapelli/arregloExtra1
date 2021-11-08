function miFuncion() {
  let cant: number = Number(prompt("cantidad de elementos"));
  let valor = String(prompt("valor del arreglo"));

  let arreglo: string[] = new Array(cant);
  for (let i: number = 0; i < cant; i++) {
    arreglo[i] = valor;
    console.log(arreglo[i]);
  }
}
miFuncion();
