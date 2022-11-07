import { Observable, of } from "rxjs";

// const obs$ = of(1, 2, 3, 4, 5, 6); - //de esta forma muestra por consola 1,2,3,4,5,6
// const obs$ = of([1, 2, 3, 4, 5, 6]); //- de esta forma muestra por consola [1,2,3,4,5,6]
// const obs$ = of(...[1, 2, 3, 4, 5, 6]); //- de esta forma muestra por consola 1,2,3,4,5,6
// const obs$ = of(...[1, 2, 3, 4, 5, 6], "Felix", 21, true); //- de esta forma muestra por consola 1,2,3,4,5,6, 'Felix', true
// const obs$ = of(
//   [1, 2],
//   { a: 5, b: 6 },
//   function () {},
//   true,
//   Promise.resolve(true)
// ); // de esta forma se va mostrar por consola [1,2], {a:5,b:6}, function, true, Promise.resolve

const obs$: Observable<number> = of(...[1, 2, 3, 4, 5, 6], 1000, 2000, 3000); //- de esta forma muestra por consola 1,2,3,4,5,6,1000,2000,3000

console.log("Inicio del obs$");
obs$.subscribe(
  (next) => console.log("next ", next),
  null,
  () => console.log("Terminamos la secuencia!!")
);
console.log("Fin del obs$");
