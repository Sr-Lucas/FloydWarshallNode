# FloydWarshallNode

- Atenção: o programa espera que um arquivo de nome input.txt esteja no mesmo
  nível do arquivo index.js.

- O conteúdo do arquivo input.txt deve ser o grafo representado em uma matriz
  separando os valores por espacos.

- Deve ser considerado como INFINITO o valor 9007199254740991 que é o Number.MAX_SAFE_INTEGER do javascript

---

A seguir, um exemplo do que deve estar dentro do arquivo input.txt:

```
 0 2 1 9007199254740991 3
 9007199254740991 0 9007199254740991 4 9007199254740991
 9007199254740991 1 0 9007199254740991 1
 1 9007199254740991 3 0 5
 9007199254740991 9007199254740991 9007199254740991 9007199254740991 0
```

---

Esse input representa o grafo:

```
 [
  [ 0, 2, 1, '∞', 3 ],
  [ '∞', 0, '∞', 4, '∞' ],
  [ '∞', 1, 0, '∞', 1 ],
  [ 1, '∞', 3, 0, 5 ],
  [ '∞', '∞', '∞', '∞', 0 ]
]
```

e irá retornar a resposta:

```
 [
  [ 0, 2, 1, 6, 2 ],
  [ 5, 0, 6, 4, 7 ],
  [ 6, 1, 0, 5, 1 ],
  [ 1, 3, 2, 0, 3 ],
  [ '∞', '∞', '∞', '∞', 0 ]
 ]
```
