// OPERADOR exhaustMap():
// Este operador solo mantinien una subscripción interna, es decir, aunque el source vuelva a emitir un valor y vuelva a crearse un nuevo observable
// interno, este será ingnorado hasto que no se complete el anterior.

import { exhaustMap, fromEvent, interval, take } from "rxjs";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, "click");

click$.pipe(exhaustMap(() => interval$)).subscribe(console.log);
