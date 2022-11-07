import { of, from } from "rxjs";

/**
 * of => toma los argumentos y genera una secuencia de valores
 * from => crea un Observablee en base a un array, promesa, iterable, observable
 */

const observer = {
  next: (val) => console.log("next: ", val),
  complete: () => console.log("Complete"),
};

const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const miIterable = miGenerador();

// for (const id of miIterable) {
//   console.log(id);
// }

from(miIterable).subscribe(observer);

// const source$ = from([1, 2, 3, 4, 5]); // 1,2,3,4,5
// const source$ = of(...[1, 2, 3, 4, 5]); //[1,2,3,4,5]
// const source$ = from("Felix"); // F,e,l,i,x
// const source$ = of("Felix"); // Felix

const source$ = from(fetch("https://api.github.com/users/klerith"));

// source$.subscribe(async (resp) => {
//   console.log(resp);

//   const dataResp = await resp.json();
//   console.log(dataResp);
// });

// source$.subscribe(observer);
