import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement("div");

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices turpis orci, eget efficitur dolor imperdiet eu. In in mauris eu nisi congue facilisis. Cras blandit, nunc et faucibus suscipit, tortor nisl molestie lectus, vitae fermentum ex justo ut lacus. Morbi sit amet luctus risus. Donec ultricies neque ex. Fusce malesuada, nisi sed mattis molestie, lorem velit aliquam ante, nec sagittis magna tortor id mauris. Nunc augue velit, ultricies sed consequat sit amet, cursus nec diam. Mauris commodo massa turpis, vel pulvinar nulla placerat eu. Aliquam consectetur, urna sed varius aliquet, nunc ipsum tristique sapien, et interdum justo metus non orci. Cras pellentesque lacus ut dolor commodo, a rhoncus odio iaculis.
<br/><br/>
Nam auctor molestie iaculis. Maecenas urna est, congue a tortor quis, porttitor porta tellus. Ut tristique vitae massa et cursus. Maecenas eget rhoncus metus. Nulla vel luctus turpis. Nulla id tincidunt nulla, non dignissim ante. Donec varius nisl nec magna tristique malesuada ac sed felis. In vehicula ligula in eros viverra pulvinar. Nam efficitur ex orci, vitae vestibulum arcu scelerisque non. Maecenas at mauris sit amet felis molestie eleifend at vel tellus. Donec eu nisi quis arcu consectetur placerat.
<br/><br/>
Donec vehicula condimentum neque non iaculis. Sed in volutpat lorem, at fringilla felis. Mauris eget odio a risus viverra rutrum. Vivamus dictum, magna ut semper rhoncus, ligula erat condimentum augue, vitae imperdiet nisl sapien vitae erat. Vivamus iaculis ac velit nec aliquet. Donec tempor lorem sapien, ut tempus ligula sagittis sed. Phasellus vestibulum libero non mauris feugiat fringilla. Nulla urna dolor, mollis auctor eros ac, ornare porttitor magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed bibendum sagittis lacus quis tempor.
<br/><br/>
Vestibulum odio diam, viverra in placerat id, ultrices vestibulum turpis. Pellentesque consectetur placerat tellus tempus facilisis. Quisque sed ornare mi, sit amet rhoncus ex. Phasellus hendrerit iaculis metus quis tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque vitae iaculis lacus, vel dictum felis. Fusce nulla neque, finibus nec ante vitae, molestie mattis turpis. Integer dapibus est et pulvinar rhoncus.
<br/><br/>
Cras posuere, ante nec molestie lacinia, nunc ipsum feugiat velit, eu fermentum tellus ante a eros. Etiam ullamcorper augue eget sagittis tempus. Sed id justo vulputate, pellentesque nunc non, blandit magna. Pellentesque semper lobortis vulputate. Aenean varius ultrices nunc. Aenean a purus nisl. Aliquam erat volutpat. Quisque lacus metus, pulvinar ut gravida rutrum, suscipit nec mi. Ut tempor condimentum consectetur. Duis iaculis facilisis sem, non laoreet sapien finibus id. Donec consequat massa risus, id aliquet tellus interdum eget. Ut tortor sem, convallis nec fermentum quis, interdum sed risus. Donec lacinia risus facilisis, sollicitudin ligula non, mollis lacus. Mauris sed leo ac magna sodales vulputate eget in diam. Mauris sodales vestibulum libero at scelerisque.
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");

body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

//Streams
const scroll$ = fromEvent(document, "scroll");
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  map((event) => calcularPorcentajeScroll(event)),
  tap(console.log)
);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
