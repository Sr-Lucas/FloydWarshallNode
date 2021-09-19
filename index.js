/*
 -- Atenção: o programa espera que um arquivo de nome input.txt esteja no mesmo
 nível do arquivo index.js.

 -- O conteúdo do arquivo input.txt deve ser o grafo representado em uma matriz
 separando os valores por espacos.

 -- Deve ser considerado como INFINITO o valor 9007199254740991 que é o Number.MAX_SAFE_INTEGER do javascript


 --------------------------------------------------------------------------

 A seguir, um exemplo do que deve estar dentro do arquivo input.txt:

 0 2 1 9007199254740991 3
 9007199254740991 0 9007199254740991 4 9007199254740991
 9007199254740991 1 0 9007199254740991 1
 1 9007199254740991 3 0 5
 9007199254740991 9007199254740991 9007199254740991 9007199254740991 0

 --------------------------------------------------------------------------

 Esse input representa o grafo:

 [
  [ 0, 2, 1, '∞', 3 ],
  [ '∞', 0, '∞', 4, '∞' ],
  [ '∞', 1, 0, '∞', 1 ],
  [ 1, '∞', 3, 0, 5 ],
  [ '∞', '∞', '∞', '∞', 0 ]
 ]

 e irá retornar a resposta:

 [
  [ 0, 2, 1, 6, 2 ],
  [ 5, 0, 6, 4, 7 ],
  [ 6, 1, 0, 5, 1 ],
  [ 1, 3, 2, 0, 3 ],
  [ '∞', '∞', '∞', '∞', 0 ]
 ] 

*/

fs = require("fs");

const matrizGrafo = inputGrafo();
printGrafo(matrizGrafo);

const numVertices = matrizGrafo[0].length;
console.log("Número de vertices => ", numVertices, "\n\n");

floydWarshall(matrizGrafo);

console.log("Resultado: \n\n");
printGrafo(matrizGrafo);

/* -------------------------------------------------------------------------- */

function convertMaxSafeIntToInfiniteChar(matrizGrafo) {
  return matrizGrafo.map((e) =>
    e.map((n) => (n === Number.MAX_SAFE_INTEGER ? "∞" : n))
  );
}

function printGrafo(matrizGrafo) {
  const matriz = convertMaxSafeIntToInfiniteChar(matrizGrafo);
  console.log("GRAFO => ", matriz, "\n\n");
}

function floydWarshall(matrizGrafo) {
  for (let k = 0; k < numVertices; k++) {
    for (let i = 0; i < numVertices; i++) {
      for (let j = 0; j < numVertices; j++) {
        if (matrizGrafo[i][k] + matrizGrafo[k][j] < matrizGrafo[i][j]) {
          matrizGrafo[i][j] = matrizGrafo[i][k] + matrizGrafo[k][j];
        }
      }
    }
  }
}

function inputGrafo() {
  return fs
    .readFileSync("./input.txt", "utf8")
    .toString()
    .split("\n")
    .map((e) => e.split(" ").map((n) => Number(n)));
}
