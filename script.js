gsap.from('.container', { duration: 1, delay: 1, x: '-10vw', ease: 'power2.in', opacity: 0 })
gsap.fromTo('.btn', { opacity: 0, scale: 0, rotation: 360 }, { duration: 1, delay: 2, opacity: 1, scale: 1, rotation: 0 })

const buttongetQuote = document.querySelector("#getQuote");
const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");

window.addEventListener("load", getQuote);
buttongetQuote.addEventListener("click", getQuote);

async function getQuote(){
    const res = await fetch("https://type.fit/api/quotes");
    const resReceived = await res.json();
    showQuote(resReceived);
}

function showQuote(resReceived){
    const randomQuote = Math.floor(Math.random()*resReceived.length);
    const quote = resReceived[randomQuote].text;
    const author = resReceived[randomQuote].author;
  
  if(author==null) {
    quoteAuthor = "Anonymous";
  }
  
    quoteText.innerHTML = quote;
    quoteAuthor.innerHTML ="-"+author;
}


particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 4,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "https://img.icons8.com/ios/512/quote.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 9,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
