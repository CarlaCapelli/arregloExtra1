function miFuncion(cant: number, valor: string): string[] {
  let arreglo: string[] = new Array(cant);
  for (let i: number = 0; i < cant; i++) {
    arreglo[i] = valor;
  }
  return arreglo;
}
console.log(miFuncion(3, "a"));
