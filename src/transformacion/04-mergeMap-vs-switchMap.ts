// DIFERENCIA switcMap Vs mergeMap

import { fromEvent, interval, mergeMap, switchMap } from "rxjs";

const click$ = fromEvent(document, "click");
const interval$ = interval(1000);

click$
  .pipe(
    // mergeMap(() => interval$)
    switchMap(() => interval$)
  )
  .subscribe(console.log);

// La principal diferencia es que el switchMap solo mantiene una subscripción interna activa, mientras que le mergeMap las
// mantiene todas
