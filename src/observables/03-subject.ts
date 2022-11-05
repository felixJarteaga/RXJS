import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next: ", value),
  error: (error) => console.warn("error: ", error),
  complete: () => console.info("completado"),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => {
    subs.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(intervalID);
    console.log("intervalo destruido");
  };
});

/**CARACTERISTICAS DEL SUBJECT
 * 1- Casteo multiple: muchas subscripciones van estar tujetas a este mismo subject (a este mismo observable) y sirve para distribuir la misma información a todos los lugares donde estemos subscrito o a todos los lugares donde nos interese este valor
 * 2- También es un OBSERVER
 * 3- También se puede manejar el Next, error y complete
 */

const subject$ = new Subject();

const intervalSubjectSUBSCRIPTION = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe((rnd) => console.log("subs1: ", rnd));
// const subs2 = intervalo$.subscribe((rnd) => console.log("subs1: ", rnd));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  intervalSubjectSUBSCRIPTION.unsubscribe();
}, 3500);

// NOTA: Cunado la data es producida DENTRO observable en sí mismo, es conocido como un "Cold Observable". Pero cuando la data es producida FUERA del observable es conocido como "Hot Observable", es decir, un SUBJEECT nos permitee transformar un Cold Observable en un Hot Observable.
