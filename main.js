/*alert('Witaj na mojej stronie');*/
console.log('Witaj na mojej stronie');
const name = 'Mariusz';
const age = 39;
/*console.log(name);
console.log(age);*/
console.log(`Mam na imię ${name} mam ${age} lat, 🙈🙉🙊 to moja pierwsza strona WWW, i skrypt w JS 🛸`)

const about = document.querySelector('.about__paragraph--js');
console.log(about);
console.log(about.innerHTML);

about.innerHTML = `${about.innerHTML} : Mam na imię ${name} mam ${age} lat, 🙈🙉🙊 to moja pierwsza strona WWW, i skrypt w JS 🛸 <br> Początki z <b>D</b>ocument <b>O</b>bject <b>M</b>odel`;

console.log(about.innerHTML);



/*const qFname = prompt('Witaj jak masz na imie?');
const qage = prompt('Czy mozesz zdradzić ile masz lat przybyszu');
console.log(qFname);
console.log(qage);*/

const nameGuest = prompt('Podaj swoje imię:', 'wpisz imie');

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
}


