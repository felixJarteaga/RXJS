// OPERADOR startWith('a'):
// Como su propio nombre indica, con este operador, en el momento de subscribirnos él, la primera emisión que devuelve es la que se le pasa
// por parámetro. Puede ser de cualquier tipo

import { endWith, of, startWith } from "rxjs";

const numeros$ = of(1, 2, 3).pipe(
  startWith({ nombre: "Felix", apellido: "Arteaga" })
);

numeros$.subscribe(console.log);

// OPERARDOR endWith('s'):
// Es igual que el startWith, solo que se lanza antes de que se compete el observable.

const number$ = of(1, 2, 3).pipe(
  startWith("a", "b", "c"),
  endWith("x", "y", "z")
);

number$.subscribe(console.log);
