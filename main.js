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

const nameGosc = prompt('Podaj swoje imię:', 'wpisz imie');

if (nameGosc) {
    alert('Witaj ' + nameGosc);
    
    ageGosc =prompt('Czy mozesz zdradzić ile masz lat przybyszu', 'wpisz wiek');
    
    if (ageGosc) 
    { 
        if (ageGosc==0) {alert ('Albo jesteś geniuszem, albo mnie okłamujesz');}

        else
        {
        
            if (ageGosc==age) 
        
            { alert('O widzę ze jesteś w takim samym wieku co ja,cieszę sie ze odwiedza mnie rówieśnik');}
            
                else 
                {
 
                    if ((ageGosc <= age)&&( younger= age-ageGosc))
                    { alert ('Jestes młodsza/y odemnie o :'+ younger +' rok/lat/lata, mam nadzieję ze znajdziesz tu coś ciekawego' );}  

                        else
                        {

                            if ((ageGosc >= age)&&( older=ageGosc-age)) { alert ('Jestes starsza/y odemnie o :'+older +' rok/lat/lata, mam nadzieję ze znajdziesz tu coś ciekawego ');}
                        
                        }            
            } 
        }                                                  
    } 
    else { alert('Anulowałeś akcję szkoda, miałem dla Ciebie niespodziankę '); }

} 

else {
    alert('Anulowałeś akcję szkoda, miałem dla Ciebie niespodziankę');
}

document.querySelector('#prompt').addEventListener('click', function() {
    oknoPrompt()
});

