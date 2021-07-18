const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  if (e.results[0].isFinal) {
    if (text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine, How was your day?";
      texts.appendChild(p);
    }
    if (text.includes("hi") || 
     text.includes("hello")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Hello, How are you doing?";
        texts.appendChild(p);
      }
     
    if (text.includes("great") || 
     text.includes("good")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "Oh! That's so nice, I'm so happy to hear that.";
        texts.appendChild(p);
      }

    if (
      text.includes("what's your name") ||
      text.includes("what is your name")
    ) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My Name is Jarvis";
      texts.appendChild(p);
    }
    if (text.includes("open YouTube")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening youtube";
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.youtube.com/");
    }
    if (text.includes("open spotify")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "opening Spotify";
        texts.appendChild(p);
        console.log("opening Spotify");
        window.open("https://www.spotify.com/in-en/");
      }
     
    if (text.includes("weather today")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "providing the weather data.";
        texts.appendChild(p);
        console.log("providing the weather data.");
        window.open("https://www.google.com/search?q=weather+today&oq=weather+today&aqs=chrome..69i57j35i39j69i60l6.2936j0j7&sourceid=chrome&ie=UTF-8");
      }
      if(text.includes('time')){
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = 'It is '+ new Date().getHours() + ":" + new Date().getMinutes()+" right now!";
        texts.appendChild(p);
      }
      if (text.includes('open Instagram')) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "opening Instagram";
        texts.appendChild(p);
        console.log("opening Instagram");
        window.open("https://www.instagram.com/");
      }
      if (text.includes("open Facebook")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "opening facebook";
        texts.appendChild(p);
        console.log("opening facebook");
        window.open("https://www.facebook.com/");
      }
      
    p = document.createElement("p");
  }
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
