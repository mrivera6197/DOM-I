const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
console.log(logo);
logo.setAttribute('src', siteContent["nav"]["img-src"])


let navGreen = document.querySelectorAll('nav a');

navGreen[0].textContent = 'Services'
navGreen[1].textContent = 'Product'
navGreen[2].textContent = 'Vision'
navGreen[3].textContent = 'Features'
navGreen[4].textContent = 'About'
navGreen[5].textContent = 'Contact'

let navColor = document.querySelectorAll('nav a')

//color nav green 

for (let i = 0; i < navColor.length; i++){
  navColor[i].style.color ='green'
}

// .style.color = 'blue'

let navItem = document.querySelector('nav a')
// console.log(navItem)

//add nav item via appendChild
const copyOfNavItem = navItem.cloneNode(true)
copyOfNavItem.textContent = 'Append'

let navContainer = document.querySelector('nav')
navContainer.appendChild(copyOfNavItem)

//add nav item via prepend
navContainer.prepend('Prepend')
navContainer.style.color = 'green'

//header img 

let headerImg = document.querySelector('header img')
headerImg.src='img/logo.png'

//circle img

let circleImg = document.getElementById('cta-img')
circleImg.setAttribute('src', 'img/header-img.png')

//title 

let mainTitle = document.querySelector('h1')
mainTitle.innerHTML = 'DOM<br>Is</br>Awesome'
 
// Button text

let button = document.querySelector('button')
button.textContent = 'Get Started'

//h4s

let subTitles = document.querySelectorAll('h4')
subTitles[0].textContent = 'FEATURES'
subTitles[1].textContent = 'ABOUT'
subTitles[2].textContent = 'SERVICES'
subTitles[3].textContent = 'PRODUCT'
subTitles[4].textContent = 'VISION'
subTitles[5].textContent = 'CONTACT'

//paragraphs 

let paragraphs = document.querySelectorAll('.main-content p')
paragraphs[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.'
paragraphs[1].textContent = 'bout content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
paragraphs[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
paragraphs[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
paragraphs[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//main-content img 

let bodyImg = document.getElementById('middle-img')
bodyImg.setAttribute('src', 'img/mid-page-accent.jpg')

//contact p 

let contactParagraph = document.querySelectorAll('.contact p')
contactParagraph[0].innerHTML = '123 Way 456 Street <br>Somewhere, USA</br>'
contactParagraph[1].textContent = '1 (888) 888-8888'
contactParagraph[2].textContent = 'sales@greatidea.io'

//footer

let footer = document.querySelector('footer p')
footer.textContent = 'Copyright Great Idea! 2018'
