//when user clicks button show message about puppy.
const animalButton = document.getElementById("animalButton");

animalButton .addEventListener("click", function() {
    alert("Puppies are cute!");
});

const animalTitle = document.querySelector("#animaltitle");

animalTitle.textContent = "My Favorite Animal is the puppy!";

const animalImage = document.querySelector("img");

animalImage.src = "huyngan-dog-5849152_640.jpg";
animalImage.addEventListener("mouseover", function() {
    animalImage.style.border = "10px solid black";
});

//input event

const animalInput = document.querySelector("#animalInput");
const animalOutput = document.querySelector("#animalOutput");

animalInput.addEventListener("input", function() {
    animalOutput.textContent = animalInput.value;
});

animalInput.addEventListener("focus", function() {
    console.log("input is focused");
});

animalInput.addEventListener("blur", function() {
    console.log("input lost focus");
});


const animalForm = document.querySelector("#animalForm");
    animalForm.addEventListener("submit", function(event) {
        event.preventDefault();
        animalOutput.textContent = "Your favorite animal is " + animalInput.value;
        console.log("Form submitted with the animal: " + animalInput.value);

    });

document.addEventListener("keydown", function(event) {
    console.log("A key was pressed:" + event.key);
    console.log("Key code:" + event.code);
});

