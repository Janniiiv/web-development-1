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

