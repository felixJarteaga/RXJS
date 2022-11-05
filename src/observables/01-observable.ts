import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("Siguiente [next]: ", value),
  error: (error) => console.warn("error [obs]: ", error),
  complete: () => console.info("completado [obs]"),
};

// const obs$ = Observable.create():
const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  subs.next("Hola");
  subs.next("Mundo");

  // forzar un error
  // const a = undefined;
  // a.nombre = "Felix";

  subs.complete();

  subs.next("Hola despùes de complete");
  subs.next("Mundo despùes de complete");
});

obs$.subscribe(observer);

// obs$.subscribe( resp => console.log(resp) );
// obs$.subscribe(console.log);

// obs$.subscribe((resp) => {
//   console.log(resp);
// });

// obs$.subscribe(
//   (valor) => {
//     console.log("next: ", valor);
//   },
//   (error) => {
//     console.warn("error: ", error);
//   },
//   () => {
//     console.info("Completado");
//   }
// );
