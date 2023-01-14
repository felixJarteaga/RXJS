import { debounceTime, fromEvent, map, mergeAll, pluck } from "rxjs";
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

// OPERADOR mergeAll():
// Imaginemos que tenemos un observable 'source$' el cual emite otros dos observables hijos 'obs1$' y 'obs2$',
// Si el primer observable hijo 'obs1$' emite los valores de a, b, c ; El FLUJO DE SALIDA después de pasar por el operador mergeAll seria: a---b---c.
// Si el segundo observable hijo 'obs2$' emite los valores de e ; El FLUJO DE SALIDA después de pasar por el operador mergeAll seria: a---b---c ---e.
// Si el primer observable hijo 'obs1$' emite el valor de d ; El FLUJO DE SALIDA después de pasar por el operador mergeAll seria: a---b---c---e---d.
// Si el observable padre 'source$' y el primer observable hijo 'obs1$' se completan, no se lanza el complete del observable.
//Si después de esto el segundo observable hijo 'obs2$' emite los valores de f, g ; El FLUJO DE SALIDA después de pasar por el operador mergeAll seria: a---b---c---e---d---f---g.
// Cuando se complete el segundo observable hijo'obs2$' es cuando se lanza el complete del observable padre y terminanría.

input$
  .pipe(
    debounceTime(500),
    map((event) => {
      const texto = event.target["value"];
      return ajax.getJSON(`https://api.github.com/search/users?q=${texto}`);
    }),
    mergeAll(),
    pluck<any, any>("items")
  )
  .subscribe(mostrarUsuarios);
