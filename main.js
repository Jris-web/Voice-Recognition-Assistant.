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
      p.innerText = "I am fine";
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
      p.innerText = "opening youtube channel";
      texts.appendChild(p);
      console.log("opening youtube");
      window.open("https://www.youtube.com/");
    }
     
    if (text.includes("weather today")) {
        p = document.createElement("p");
        p.classList.add("replay");
        p.innerText = "providing the weather data.";
        texts.appendChild(p);
        console.log("providing the weather data.");
        window.open("https://www.google.com/search?q=weather+today&oq=weather+today&aqs=chrome..69i57j35i39j69i60l6.2936j0j7&sourceid=chrome&ie=UTF-8");
      }









    p = document.createElement("p");
  }
//   https://www.google.com/search?q=weather+today&oq=weather+today&aqs=chrome..69i57j35i39j69i60l6.2936j0j7&sourceid=chrome&ie=UTF-8




});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();
