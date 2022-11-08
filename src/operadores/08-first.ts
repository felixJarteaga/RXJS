import { first, fromEvent, map, take, tap } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    tap<PointerEvent>(console.log),
    // map((event) => ({
    //   clientY: event.clientY,
    //   clientX: event.clientX,
    // }))
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first((x) => x.clientY >= 150)
  )
  .subscribe({
    next: (val) => console.log("next ", val),
    complete: () => console.log("Complete"),
  });
