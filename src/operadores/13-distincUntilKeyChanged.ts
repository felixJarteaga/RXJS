import { distinctUntilChanged, distinctUntilKeyChanged, from } from "rxjs";

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
    nombre: "Hulk",
  },
  {
    nombre: "Capitan America",
  },
  {
    nombre: "Hulk",
  },
];

from(personajes).pipe(distinctUntilKeyChanged("nombre")).subscribe(console.log);
