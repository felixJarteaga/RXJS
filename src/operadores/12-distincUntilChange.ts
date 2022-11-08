import { distinct, distinctUntilChanged, from, of } from "rxjs";

const numeros$ = of(1, "1", 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, "1");

// El operador distinc utiliza el ===
numeros$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
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
    nombre: "Hulk",
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
  .pipe(distinctUntilChanged((ant, act) => ant.nombre === act.nombre))
  .subscribe(console.log);
