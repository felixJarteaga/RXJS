import { catchError, map, of, pluck } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = "https://api.github.com/users?per_page=5";

const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const atrapaErrores = (err: AjaxError) => {
  console.warn("error en: ", err.message);
  return of([]);
};

// const fetchPromesa = fetch(url);

// // fetchPromesa
// //   .then((resp) => resp.json())
// //   .then((data) => console.log("data: ", data))
// //   .catch((err) => console.warn(err));

// fetchPromesa
//   .then(manejaErrores)
//   .then((resp) => resp.json())
//   .then((data) => console.log("data: ", data))
//   .catch((err) => console.warn(err));

// Retornando unicamente la response (el array de objetos con el operador "map")
// ajax(url)
//   .pipe(map((resp) => resp.response))
//   .subscribe(console.log);

// Retornando unicamente la response (el array de objetos con el operador "pluck")
ajax(url)
  .pipe(
    pluck("response"),
    // El "catchError" retorna tiene que retornar un error o un nuevo observable
    catchError(atrapaErrores)
  )
  .subscribe((users) => console.log("usuarios: ", users));
