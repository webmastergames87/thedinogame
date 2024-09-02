let titleElement = document.getElementById("title");
let letters = titleElement.textContent.split("");

function startAnimation() {
  titleElement.innerHTML = "";

  letters.forEach((letter, index) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "wave-animation";

    if (letter === " ") {
      span.style.width = "0.25em";
    } else {
      span.style.animationDelay = index * 0.125 + "s";
    }

    titleElement.appendChild(span);
  });
}

setTimeout(function () {
  startAnimation();

  setInterval(startAnimation, 5000);
}, 10);