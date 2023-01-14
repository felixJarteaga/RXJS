import {
  debounceTime,
  fromEvent,
  map,
  mergeAll,
  mergeMap,
  pluck,
  switchMap,
} from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";

// Referencias
const body = document.querySelector("body");
const textInput = document.createElement("input");
const orderList = document.createElement("ol");
body.append(textInput, orderList);

// Helpers

const mostrarUsuarios = (usuarios: GithubUser[]) => {
  console.log(usuarios);
  orderList.innerHTML = "";

  for (const usuario of usuarios) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = usuario.avatar_url;

    const anchor = document.createElement("a");
    anchor.href = usuario.html_url;
    anchor.text = "Ver página";
    anchor.target = "_blank";

    li.append(img);
    li.append(usuario.login + " ");
    li.append(anchor);
    orderList.append(li);
  }
};

// Streams

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$.pipe(
  debounceTime(500),
  mergeMap((event) => {
    const texto = event.target["value"];
    return ajax.getJSON(`https://api.github.com/search/users?q=${texto}`);
  }),
  pluck<any, any>("items")
);
// .subscribe(mostrarUsuarios);

// Otro ejercicio con mergeMap
// const url = "https://httpbin.org/delay/1?arg=";

// input$.pipe(
//   pluck("target", "value"),
//   mergeMap((texto) => ajax.getJSON(url + texto))
// );
// .subscribe(console.log);

// OPERADOR switchMap():
// Es igual que le mergeMap, es decir, es un operador que recibe un callback que retorna un nuevo observable interno por cada
// valor que emita nuestro observable externo, con la diferencia que con cada nueva emisión del observable externo, además
// de crear un nuevo observable interno, cancela el anterior. Este operador es útil cuando trabajamos con peticiones ajax y la que nos interesa
// es la última

const url = "https://httpbin.org/delay/1?arg=";

input$
  .pipe(
    pluck("target", "value"),
    switchMap((texto) => ajax.getJSON(url + texto))
  )
  .subscribe(console.log);

// Al escribir 'felix' en el input, solo nos devuelve con el valor de felix, no con 'f', 'fe', 'fel'...
