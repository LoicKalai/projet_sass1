const moon = document.getElementById('lune')
const search = document.querySelector('.search')
const input = document.querySelector('input')
const contnue = document.querySelector('.ctnue')
const blocgris = document.querySelector('.blocgris')
const h2 = document.querySelectorAll('h2')
const h3 = document.querySelectorAll('h3')
const h4 = document.querySelectorAll('h4')
const p = document.querySelectorAll('p')
const lune = document.getElementById('lune')
const sun = document.getElementById('sun')
const profil = document.querySelector('.prof')

let clic = 0;
moon.addEventListener('click', function(){
  clic++ 

  /* Changement en noir*/
  if(clic % 2 == 1){ 
    document.body.style.background = "#141D2F"
    search.style.background = "#1E2A47"
    search.style.boxShadow = "0px 0px 0px 0px rgba(70, 96, 187, 0)"
    input.style.background = "#1E2A47"
    contnue.style.background = '#1E2A47'
    contnue.style.boxShadow = "0px 0px 0px 0px rgba(70, 96, 187, 0)"
    blocgris.style.background = '#141D2F'
    h2.forEach(element => element.style.color = "#FFFFFF");
    h3.forEach(element => element.style.color = "#FFFFFF");
    h4.forEach(element => element.style.color = "#FFFFFF");
    p.forEach(element => element.style.color = "#FFFFFF");
    lune.style.display = 'none'
    sun.style.display = 'flex'
    profil.style.color = '#0079FF'
  }
 

})

 /* Changement en blanc*/

sun.addEventListener('click', function(){
  clic++
  if(clic % 2 ==0){
  document.body.style.background = "#F6F8FF"
  search.style.background = "#FEFEFE"
  input.style.background = "#FEFEFE"
  contnue.style.background = '#FEFEFE'
  contnue.style.boxShadow = " 0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
  search.style.boxShadow = " 0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
  blocgris.style.background = '#F6F8FF'
  h2.forEach(element => element.style.color = "#2B3442");
  h3.forEach(element => element.style.color = "#2B3442");
  h4.forEach(element => element.style.color = "#2B3442");
  p.forEach(element => element.style.color = "#2B3442");
  lune.style.display = 'flex'
  sun.style.display = 'none'
  profil.style.color = '#0079FF'
  }
})


