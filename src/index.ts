function miFuncion(cant: number, valor: string): any {
  let arreglo: string[] = new Array(cant);
  for (let i: number = 0; i < cant; i++) {
    arreglo[i] = valor;
    console.log(arreglo);
  }
}
miFuncion(3, "a");
