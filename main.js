const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link) => 
    link.addEventListener("click",() => {
        navMenu.classList.add('hidden')
    })
)
hamburger.addEventListener("click", ()=> {
     navMenu.classList.remove('hidden')
})
closeIcon.addEventListener("click",()=>{
    navMenu.classList.add('hidden')
})

const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll('.item_wrap');
const food = document.querySelectorAll('.food');
const snack = document.querySelectorAll('.snack');
const beverage =document.querySelectorAll('.beverage');

console.log(tabs);
tabs.forEach(list => {
    list.addEventListener("click",()=>{
       tabs.forEach(list => {
        list.classList.remove("active");
       }
    )
        list.classList.add("active");
        const tabval=list.getAttribute('data-tabs');
        console.log(tabval)

        
        all.forEach(items =>{
            items.style.display = 'none';
        })
        
        if(tabval == 'food'){
            food.forEach(items =>{
                items.style.display = 'block';
            })
        }else if(tabval == 'snack'){
            snack.forEach(items =>{
             items.style.display='block';
            })
        }else if(tabval=='beverage'){
            beverage.forEach(items=>{
                items.style.display='block';
            })
        }else{
            all.forEach(items =>{
                items.style.display = 'block';
            })
        }
        
    }
    
)
});
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}

const scrollbtn = document.getElementById('scroll-up');

const scrollup = () => {
    if(this.scrollY >= 250){
        scrollbtn.classList.remove("-bottom-1/2");
        scrollbtn.classList.add("-bottom-4");
    }else{
        scrollbtn.classList.add("-bottom-1/2");
        scrollbtn.classList.remove("-bottom-4");
    }
}

window.addEventListener('scroll',scrollup)

const header = document.getElementById("header");

const scrollHeader = () => {
  
  
    if (this.scrollY >= 50) {
      header.classList.add("border-b", "border-secondaryColor");
    } else {
      header.classList.remove("border-b", "border-secondaryColor");
    }
  };
  window.addEventListener("scroll", scrollHeader);


  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
  })
  
  sr.reveal(".home__image");
  sr.reveal(".home__content",  { origin: "bottom" });
  
  
