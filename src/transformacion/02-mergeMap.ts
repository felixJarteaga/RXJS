// OPERADOR mergeMap():
// este operador recibe un observasble interno. Cada vez que el observable externo emita un valor nuevo, el mergeMap
// crea un nuevo observable interno, y son los valores de este último los que se retornan en la salida. NO SE COMPLETA hasta que no se completa
// el observable externo y todos los internos. Este operador no tiene límite de subscripciones internas.

import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from "rxjs";

const letras$ = of("a", "b", "c");

letras$.pipe(
  mergeMap((letra) =>
    interval(1000).pipe(
      map((i) => letra + i),
      take(3)
    )
  )
);
// .subscribe({
//   next: (val) => console.log("next: ", val),
//   complete: () => console.log("Compete"),
// });

// Ejercicio para saber cuanto tiempo pasa el usuario presionando el ratón

const mouseDown$ = fromEvent(document, "mousedown");
const mouseUp$ = fromEvent(document, "mouseup");
const interval$ = interval();

mouseDown$
  .pipe(mergeMap(() => interval$.pipe(takeUntil(mouseUp$))))
  .subscribe(console.log);
