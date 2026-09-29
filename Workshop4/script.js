

// task1

const taskOneHeading = document.querySelector("#taskOneHeading");
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const changeStyleButton = document.querySelector("#changeStyleButton");
const changeTextButton = document.querySelector("#changeTextButton");
const animalTable = document.querySelector("#animalTable");

const animalText = document.querySelector("#animalText");


changeHeadingButton.addEventListener("click", function () {
  taskOneHeading.textContent = "New Heading!";
});

changeStyleButton.addEventListener("click", function () {
  taskOneHeading.classList.toggle("highlight");
});

changeTextButton.addEventListener("click", function () {
  animalText.textContent = "Elephants are the world's largest land animals, and they are known for their intelligence, social behavior, and long trunks.";
});

// task2

const animalContent = document.querySelector("#animalContent");

const animalHeading = document.createElement("h3");
animalHeading.textContent = "Animal of the Day";
animalHeading.classList.add("animal-heading");

const animalParagraph = document.createElement("p");
animalParagraph.textContent = "Elephants are the largest existing land animals. Three species are currently recognized: the African bush elephant, the African forest elephant, and the Asian elephant.";

const animalImg = document.createElement("img");
animalImg.src = "images/elephant.png";
animalImg.alt = "Elephant";
animalImg.classList.add("animal-image");

animalContent.appendChild(animalHeading);
animalContent.appendChild(animalParagraph);
animalContent.appendChild(animalImg);

// task3

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;

    console.log("Selected animal:", selectedAnimal);

    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiger";
        animalImage.src = "images/tiger.jpg";
        animalImage.alt = "Tiger";
        animalDescription.textContent = "The tiger is the largest species among the Felidae and classified in the genus Panthera.";
    } 

    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elephant";
        animalImage.src = "images/elephant.jpg";
        animalImage.alt = "Elephant";
        animalDescription.textContent = "Elephants are the largest existing land animals. Three species are currently recognized: the African bush elephant, the African forest elephant, and the Asian elephant.";
    }

    if (selectedAnimal === "penguin") {
        animalName.textContent = "Penguin";
        animalImage.src = "images/penguin.jpg";     
    animalImage.alt = "Penguin";
        animalDescription.textContent = "Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere, with only one species, the Galápagos penguin, found north of the equator.";
    }

    if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImage.src = "images/panda.jpg";
        animalImage.alt = "Panda";
        animalDescription.textContent = "Giant pandas are the most recognizable members of the bear family. They are native to China and are known for their distinctive black and white fur.";
    }
});

// task4


    const animalForm = document.querySelector("#animalForm");
    const observationAnimal = document.querySelector("#observationAnimal");
    const observationLocation = document.querySelector("#observationLocation");
    const observationDate = document.querySelector("#observationDate");
    const observationTableBody = animalTable.querySelector("tbody");

    animalForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const animal = observationAnimal.value.trim();
        const location = observationLocation.value.trim();
        const date = observationDate.value.trim();

        if (!animal || !location || !date) {
            return; // Exit if any field is empty
        }

        const row = document.createElement("tr");

        const tdAnimal = document.createElement("td");
        tdAnimal.textContent = animal;

        const tdLocation = document.createElement("td");
        tdLocation.textContent = location;

        const tdDate = document.createElement("td");
        tdDate.textContent = date;


        row.append(tdAnimal, tdLocation, tdDate);
        observationTableBody.append(row);
     

        animalForm.reset();
    });



