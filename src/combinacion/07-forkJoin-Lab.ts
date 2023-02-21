// LABORATORIO forkJoin: CASO DE USO MAS COMUN
// Realizar peticiones ajax de manera simultanea

import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const GITHUB_API_URL = "https://api.github.com/users";
const GITHUB_USER = "felixJarteaga";

forkJoin({
  usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
  repos: ajax
    .getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repo12345s`)
    .pipe(catchError((err) => of([]))),
  gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),
})
  .pipe(catchError((err) => of(err)))
  .subscribe(console.log);
