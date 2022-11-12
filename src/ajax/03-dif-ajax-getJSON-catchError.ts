import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = "https://httpbinxx.org/delay/1";
// const url = "https://api.github.com/users?per_page=5";

const manejaError = (err: AjaxError) => {
  console.warn("error: ", err.message);
  return of({
    ok: false,
    usuarios: [],
  });
};

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs$
//   .pipe(catchError(manejaError))
//   .subscribe((data) => console.log("getJSON: ", data));

// obs2$
//   .pipe(catchError(manejaError))
//   .subscribe((data) => console.log("ajax: ", data));

obs$.pipe(catchError(manejaError)).subscribe({
  next: (val) => console.log("next: ", val),
  error: (err) => console.warn("error en subs: ", err),
  complete: () => console.log("complete"),
});
// obs2$.subscribe((data) => console.log("ajax: ", data));
