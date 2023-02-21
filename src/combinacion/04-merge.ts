// FUNCION merge
// El merge es una función que recibe varios observables y el resultado es el producto de ambos observables combinados simultaneamente.
// No se dispara el complete del subscribe hasta que se completen ambos observables.

import { fromEvent, merge, pluck } from "rxjs";

const keyup$ = fromEvent(document, "keyup");
const click$ = fromEvent(document, "click");

merge(keyup$.pipe(pluck("type")), click$.pipe(pluck("type"))).subscribe(
  console.log
);
