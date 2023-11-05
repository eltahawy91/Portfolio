
const youtybeVid = document.getElementById("youtybeVid")



youtybeVid.addEventListener("click", () => {

    window.open("https://www.youtube.com/watch?v=u31qwQUeGuM", "_blank", "width=400, height=400,left=600,top=300")
})



const dynamicText = document.querySelector("h1 span");
const words = ["Business ", "Company ", "Design  "];
// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();


// let price_per = document.querySelectorAll(".price_per") ////divs
let mothly = document.getElementById("mothly") ////divs
let yearly = document.getElementById("yearly") ////divs
let navLink = document.querySelectorAll(".filter") ///2buttons



for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", (e) => {
        const filter = e.target.dataset.filter
        // console.log(filter);
        if (filter == "month") {
            yearly.classList.add("d-none")
            mothly.classList.remove("d-none")
            yearly.style.display = "none"

            navLink[0].classList.add("active")
            navLink[1].classList.remove("active")

        }
        else if (filter == "year") {
            yearly.classList.remove("d-none")
            mothly.classList.add("d-none")
            yearly.style.display = "block"

            navLink[1].classList.add("active")
            navLink[0].classList.remove("active")

        }


    })
}


