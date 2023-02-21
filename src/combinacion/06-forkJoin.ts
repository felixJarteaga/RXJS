// FUNCION forkJoin
// Es una función que recibe varios observables. Los obs$ que recibe dicha función tienen que ser finitos, sino el forkJoin no emitiría ningun valor.
// Una vez se completen los obs4 internos, la función emitiría los valores de los observables internos en un arreglo.

import { delay, forkJoin, interval, of, take } from "rxjs";

const numeros$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3));
const letras$ = of("a", "b", "c").pipe(delay(3500));

// forkJoin(numeros$, interval$, letras$).subscribe(console.log);

// forkJoin(numeros$, interval$, letras$).subscribe((resp) => {
//   console.log("numeros: ", resp[0]);
//   console.log("intérvalo: ", resp[1]);
//   console.log("letras: ", resp[2]);
// });

forkJoin({ num: numeros$, int: interval$, let: letras$ }).subscribe((resp) => {
  console.log(resp);
});
