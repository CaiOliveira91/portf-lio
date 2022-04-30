// PARTICULAS

window.onload = function () {
  Particles.init({
    selector: ".background"
  });
};

var particles = Particles.init({
  selector: ".background",
  color: ["#9D00FF", "#FF0099", "00ffff"],
  maxParticles: 200,
  connectParticles: true,
  responsive: [
    {
      breakpoint: 900,
      options: {
        color: ["#9D00FF", "#FF0099", "00ffff"],
        maxParticles: 120,
        connectParticles: true
      }
    }
  ]
});

// RELOGIO

Number.prototype.pad = function (n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
  return r;
};

function updateClock() {
  var now = new Date();
  var millisec = now.getMilliseconds(),
    sec = now.getSeconds(),
    min = now.getMinutes(),
    hour = now.getHours(),
    month = now.getMonth(),
    day = now.getDate(),
    year = now.getFullYear();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const tags = ["month", "day", "year", "hour", "min", "s", "millisec"],
    corr = [
      months[month],
      day,
      year,
      hour.pad(2),
      min.pad(2),
      sec.pad(2),
      millisec
    ];
  for (var i = 0; i < tags.length; i++)
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

window.onload = function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
};

// TEXTO PRINCIPAL

var spanText = function spanText(text) {
  var string = text.innerText;
  var spaned = '';
  for (var i = 0; i < string.length; i++) {
    if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
    else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
  }
  text.innerHTML = spaned;
}


var headline = document.querySelector("h1");

spanText(headline);

// SOBRE PROG

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developer!", "Criativo!", "Front-End!" ];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; 
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

//TITULO SMOKE

const text = document.querySelector('.smok');
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

const letters = document.querySelectorAll('span');
for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener('mouseover', function () {
    letters[i].classList.add('active');
  });
}

// TWEENMAX

TweenMax.from('nav', 2, {
  delay: 1,
  height: '0vh' ,
  ease: Power2.easeInOut
})

TweenMax.from('.menu', 2, {
  delay: 2,
  height: '130vh' ,
  ease: Power2.easeInOut
})

TweenMax.from('.main', 2.5, {
  delay: 3,
  opacity: 0,
  ease: Power2.easeInOut
})

TweenMax.from('.m', 2.5, {
  delay: 3.3,
  opacity: 0 ,
  ease: Power2.easeInOut
})

TweenMax.from('#timedate', 2.5, {
  delay: 3.6,
  opacity: 0 ,
  ease: Power2.easeInOut
})

TweenMax.from('.media', 2.5, {
  delay: 4,
  opacity: 0 ,
  ease: Power2.easeInOut
})

TweenMax.from('.menu-btn', 2.5, {
  delay: 3,
  width: '0vh',
  ease: Power2.easeInOut
})

// MENU ACTIVE BTN

function openNav(){
  document.getElementById("menu-btn-function").style.width='100%';
}

function closeNav(){
  document.getElementById("menu-btn-function").style.width='0%';
}
