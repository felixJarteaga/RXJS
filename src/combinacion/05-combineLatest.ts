// FUNCION combineLatest
//Es una unfión que recibe observables como argumentos, combinarlos y emitir los valores de todos los observables internos simultaneamente.
// Retorna un nuevo observable, el cual va emitir valores hasta que todos los observables internos hayan emitido al menos un valor.
// Es decir, el obs1$ emite el valor de 'a', y hasta que el obs2$ no emite un valor ('1'), no hay una salida en el subscribe. La salida
// será un arreglo de ['a',1], justo en el oreden en el que fueron enviados.
// La función lo que hace es combinar el último valor de cada obs$. Entonces si ahora el obs1$ emite el valor de 'b', la salida sería : ['b',1]
// Ahora el obs2$ emite el valor de 2, la salida sería: ['b',2] y así sucesivamente.
// No se completa la subscripción hasta que no se completan todos los obs$ internos.

import { combineLatest, fromEvent, pluck } from "rxjs";

// const keyup$ = fromEvent(document, "keyup");
// const click$ = fromEvent(document, "click");

// combineLatest(keyup$.pipe(pluck("type")), click$.pipe(pluck("type"))).subscribe(
//   console.log
// );

const input1 = document.createElement("input");
const input2 = document.createElement("input");

input1.placeholder = "email@gmail.com";
input2.placeholder = "*********";
input2.type = "password";

document.querySelector("body").append(input1, input2);

// Helper
const getinputStream = (elemt: HTMLElement) => {
  return fromEvent<KeyboardEvent>(elemt, "keyup").pipe(
    pluck("target", "value")
  );
};
combineLatest(getinputStream(input1), getinputStream(input2)).subscribe(
  console.log
);
