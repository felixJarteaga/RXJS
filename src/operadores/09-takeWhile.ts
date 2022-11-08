import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<PointerEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    //Si no mandamos el segundo argumento del takeWhile es por defecto false y como consecuencia a esto va sacar por consola solo los valores hasta que se rompa la condición (y<=150) sin incluir el "causante" de la rotura de la condición
    // takeWhile(({ y }) => y <= 150)

    // Si mandamos el segundo argumento del takeWhile como true a diferencia del caso anterior, si incluye en la impresión por pantalla el "causante" de la rotura de la condición
    takeWhile(({ y }) => y <= 150, true)
  )
  .subscribe({
    next: (val) => console.log("next ", val),
    complete: () => console.log("Complete"),
  });
