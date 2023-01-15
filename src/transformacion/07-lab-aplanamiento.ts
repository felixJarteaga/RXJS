// Ejercicio para comparar el uso de los operadores:mergeMap(),switchMap(), exhaustmap()

import {
  catchError,
  exhaustMap,
  fromEvent,
  map,
  mergeMap,
  of,
  pluck,
  switchMap,
  tap,
} from "rxjs";
import { ajax } from "rxjs/ajax";

// Helper

const peticionHttpLogin = (userPass) => {
  return ajax.post("https://reqres.in/api/login?delay=1", userPass).pipe(
    pluck("response", "token"),
    catchError((er) => of("xxx"))
  );
};

// creando un formulario

const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputPass = document.createElement("input");
const submitBtn = document.createElement("button");

// Configuraciones

inputEmail.type = "email";
inputEmail.placeholder = "Email";
inputEmail.value = "eve.holt@reqres.in";

inputPass.type = "password";
inputPass.placeholder = "Password";
inputPass.value = "cityslicka";

submitBtn.innerHTML = "Ingresar";

// Insertar los elementos anteriormente creados en el html

form.append(inputEmail, inputPass, submitBtn);
document.querySelector("body").append(form);

//Vamos a prevenir el comportamiento por defecto de refresh del formulario

// Streams

const submitForm$ = fromEvent(form, "submit").pipe(
  tap((ev) => ev.preventDefault()),
  map((ev) => ({
    email: ev.target[0].value,
    password: ev.target[1].value,
  })),
  // mergeMap(peticionHttpLogin)
  // switchMap(peticionHttpLogin)
  exhaustMap(peticionHttpLogin)
);

submitForm$.subscribe((token) => {
  console.log(token);
});
