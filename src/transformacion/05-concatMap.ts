// OPERADOR concatMap():
// Este operador también recibe un callback que emite un observable interno. Entonces, cuando nuestro observable externo (source$) emite un valor,
// se subscribe a un observable interno y son las emisiones de este nuevo observable las que tenemos en la salida. Cuando el source$ emite otro valor
// nos subscribimos a un nuevo observable interno que se queda en cola (no emite valores) hasta que el anterior observable interno se completa.

import { concatMap, fromEvent, interval, switchMap, take } from "rxjs";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, "click");

click$.pipe(concatMap(() => interval$)).subscribe(console.log);
