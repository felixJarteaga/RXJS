// FUNCIÓn concat
// La función concat recibe obserbables. Hasta que no se completa el primer observable, no se ejecuta el segundo y así sucesivamente. Si el
// observable 1 nunca se completa, nunca se ejecuta el segundo observable.

import { concat, interval, of, take } from "rxjs";

const interval$ = interval(1000);

concat(
  interval$.pipe(take(3)),
  interval$.pipe(take(2)),
  [1, 2, 3, "Felix"],
  of(150)
).subscribe(console.log);
