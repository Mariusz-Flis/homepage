/*alert('Witaj na mojej stronie');*/
console.log('Witaj na mojej stronie');
const name='Mariusz';
const age=39;
/*console.log(name);
console.log(age);*/
console.log(`Mam na imię ${name} mam ${age} lat, 🙈🙉🙊 to moja pierwsza strona WWW, i skrypt w JS 🛸`)

const about = document.querySelector('.about__paragraph--js');
console.log(about);
console.log(about.innerHTML);

about.innerHTML = `${about.innerHTML} : Mam na imię ${name} mam ${age} lat, 🙈🙉🙊 to moja pierwsza strona WWW, i skrypt w JS 🛸 <br> Początki z <b>D</b>ocument <b>O</b>bject <b>M</b>odel`;

console.log(about.innerHTML);




