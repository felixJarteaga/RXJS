import { distinct, from, of } from "rxjs";

const numeros$ = of(1, "1", 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, "1");

// El operador distinc utiliza el ===
numeros$.pipe(distinct()).subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {
    nombre: "Ironman",
  },
  {
    nombre: "Capitan America",
  },
  {
    nombre: "Hulk",
  },
  {
    nombre: "Ironman",
  },
  {
    nombre: "Ironman",
  },
  {
    nombre: "Hulk",
  },
  {
    nombre: "Capitan America",
  },
];

from(personajes)
  .pipe(distinct((p) => p.nombre))
  .subscribe(console.log);
