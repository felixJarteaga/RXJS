import { auditTime, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    map(({ x }) => x),
    tap((val) => console.log("tap", val)),
    auditTime(5000)
  )
  .subscribe(console.log);
