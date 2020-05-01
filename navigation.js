const navigationSwitcher = document.querySelector('.siteHeader__navSwitcher--js')

navigationSwitcher.addEventListener('click', (e) => { 
const navigationList = document.querySelector('.siteHeader__navList--js');
navigationList.classList.toggle('siteHeader__navList--visible');
});