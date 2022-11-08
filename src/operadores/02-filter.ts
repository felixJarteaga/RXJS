import { from, fromEvent, of, range } from "rxjs";
import { filter, map } from "rxjs/operators";

range(20, 30).pipe(
  filter((val, i) => {
    console.log("index ", i);
    return val % 2 === 1;
  })
);
// .subscribe(console.log);

interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Robin",
  },
  {
    tipo: "villano",
    nombre: "Joker",
  },
];

from(personajes)
  .pipe(filter((p) => p.tipo !== "heroe"))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code), // el map recibe un KeyboardEvent y sale un string
  filter((key) => key === "Space") // el filter recibe un string y sale un string
);

keyup$.subscribe(console.log);
