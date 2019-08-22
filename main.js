/*alert('Witaj na mojej stronie');*/
console.log('Witaj na mojej stronie');
const name = 'Mariusz';
const age = 39;
/*console.log(name);
console.log(age);*/

//skrypt powitalny Alert

/*const nameGuest = prompt('Podaj swoje imię:', 'wpisz imie');

if (nameGuest) {
    ageGuest =prompt('Czy mozesz zdradzić ile masz lat:', 'wpisz wiek');
    
    if (ageGuest) 
    { 
        if (ageGuest==0) {alert ('Witaj!! ' + nameGuest +' albo jesteś niemowlakiem geniuszem, albo mnie okłamujesz');}

        else
        {
        
            if (ageGuest==age) 
        
            { alert('Witaj!! widzę ' + nameGuest +' ze jesteś w takim samym wieku co ja,cieszę sie ze odwiedza mnie rówieśnik');}
            
                else 
                {
 
                    if ((ageGuest>0)&&(ageGuest <= age)&&( calculateAge = ageGuest => { return age - ageGuest; } ))
                    { alert ('Witaj!! ' + nameGuest +' jestes młodsza/y odemnie o :'+ calculateAge(ageGuest) +' rok/lat/lata, mam nadzieję ze znajdziesz tu coś ciekawego' );}  

                        else
                        {

                            if ((ageGuest>0)&&(ageGuest >= age)&&( calculateAge = ageGuest => { return ageGuest - age; })) { alert ('Witaj!! '+ nameGuest +' jestes starsza/y odemnie o :'+calculateAge(ageGuest) +' rok/lat/lata, mam nadzieję ze znajdziesz tu coś ciekawego ');}
                        
                        }            
            } 
        }                                                  
    } 
    else { alert('Anulowałeś akcję szkoda, miałem dla Ciebie niespodziankę '); }

} 

else {
    alert('Anulowałeś akcję szkoda, miałem dla Ciebie niespodziankę');
}*/

// Funkcja powitalna strzałkowa
const welcome = (name1,age1) => console.log(`Witaj ${name1}, masz ${age1} lat!`); 
const myName= 'Mariusz';
const myAge= 39;

welcome(myName,myAge);
welcome('Mariusz', 39);

const navigationSwitcher = document.querySelector('.navigation__switcher--js')

navigationSwitcher.addEventListener('click', (e) => { 
const navigationList = document.querySelector('.navigation__list--js');
navigationList.classList.toggle('navigation__list--visible');
});

console.log(`Mam na imię ${name} mam ${age} lat, 🙈🙉🙊 to moja pierwsza strona WWW, i skrypt w JS 🛸`)

const about = document.querySelector('.about__paragraph--js');
console.log(about);
console.log(about.innerHTML);

about.innerHTML = `${about.innerHTML} : Mam na imię ${name} mam ${age} lat, 🙈🙉🙊 to moja pierwsza strona WWW, i skrypt w JS 🛸 <br> Początki z <b>D</b>ocument <b>O</b>bject <b>M</b>odel`;

console.log(about.innerHTML);