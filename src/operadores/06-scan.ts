import { from, map, reduce, scan } from "rxjs";

const numbers = [1, 2, 3, 4, 5];

// const totalAcumulador = (acc, cur) => {
//   return acc + cur;
// };

const totalAcumulador = (acc, cur) => acc + cur;

// Reduce
from(numbers).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);

// Scan
from(numbers).pipe(scan(totalAcumulador, 0)).subscribe(console.log);

// Patron Redux : manejar el estado global de la App en un único objeto
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}
const user: Usuario[] = [
  { id: "fj", autenticado: false, token: null },
  { id: "fj", autenticado: true, token: "ABC" },
  { id: "fj", autenticado: true, token: "ABC123" },
];

const state$ = from(user).pipe<Usuario>(
  scan(
    (acc, cur) => {
      return { ...acc, ...cur };
    },
    { edad: 31 }
  )
);

const id$ = state$.pipe(map((state) => state.id));

id$.subscribe(console.log);
