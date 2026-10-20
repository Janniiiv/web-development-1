// WS05 student starter / opiskelijan aloituspohja
// Complete the TODOs. This file is intentionally unfinished.
// Täydennä TODO-kohdat. Tämä tiedosto on tarkoituksella keskeneräinen.

const animalForm = document.getElementById("animalForm");
const animalName = document.getElementById("animalName");
const animalSpecies = document.getElementById("animalSpecies");
const careNote = document.getElementById("careNote");
const nameError = document.getElementById("nameError");
const speciesError = document.getElementById("speciesError");
const noteError = document.getElementById("noteError");
const formResult = document.getElementById("formResult");

// Exercises 1 and 3 / Harjoitukset 1 ja 3
animalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // TODO: Clear previous errors / Tyhjennä edelliset virheet.
    nameError.textContent = "";
    speciesError.textContent = "";
    noteError.textContent = "";
    // TODO: Read and trim values / Lue ja trimmaa kenttien arvot.
    const name = animalName.value.trim();
    const species = animalSpecies.value.trim();
    const note = careNote.value.trim();
    // TODO: Validate and show errors / Validoi ja näytä virheet.
    let isValid = true;
    if (!name) {
        nameError.textContent = "Name is required.";
        isValid = false;
    }
    if (!species) {
        speciesError.textContent = "Species is required.";
        isValid = false;
    }
    if (!note) {
        noteError.textContent = "Note is required.";
        isValid = false;
    }
    // TODO: If valid, show the result / Näytä hyväksytty tulos.
    if (isValid) {
        formResult.textContent = `Animal added: ${name}, ${species}, ${note}`;
        // TODO: Create { name, species, note } and save it as JSON.
        const animalData = { name, species, note };
        localStorage.setItem("ws05Animal", JSON.stringify(animalData));
    }
}); 


// Exercise 2 / Harjoitus 2
const sponsorForm = document.getElementById("sponsorForm");
const animalType = document.getElementById("animalType");
const yearsInput = document.getElementById("years");
const cost = document.getElementById("cost");
const discountMessage = document.getElementById("discountMessage");

sponsorForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // TODO: Convert input values with Number().
    // TODO: Muunna syötteet numeroiksi Number()-funktiolla.
    const annnualFee = Number(animalType.value);
    const years = Number(yearsInput.value);
    // TODO: Calculate the price and apply discounts.

    // TODO: Laske hinta ja alennukset.
    let totalCost = annnualFee * years;
    let discount = 0;
    let message = "no discount  applied";

    if (years >= 5) {
        discount = 0.2;
        message = "20% discount applied";
    } else if (years >= 3) {
        discount = 0.1;
        message = "10% discount applied";
    }
    // TODO: Show the result / Näytä tulos.
    cost.textContent = `Total cost: ${totalCost - (totalCost * discount)}`;
    discountMessage.textContent = message;
});

// Exercise 4 / Harjoitus 4
const loadButton = document.getElementById("loadAnimal");
const clearButton = document.getElementById("clearAnimal");
const savedAnimal = document.getElementById("savedAnimal");

function loadAnimal() {
    // TODO: Read ws05Animal. Handle null before using JSON.parse().
    // TODO: Lue ws05Animal. Tarkista null ennen JSON.parse()-muunnosta.
    const data = JSON.parse(localStorage.getItem("ws05Animal"));
    if (data === null) {
        savedAnimal.textContent = "No animal data found.";
        return;
    }   
    // TODO: Display name, species and note with textContent.

    savedAnimal.textContent = `Name: ${data.name}, Species: ${data.species}, Note: ${data.note}`;
    // TODO: Näytä nimi, laji ja muistio textContent-ominaisuudella.
}

loadButton.addEventListener("click", loadAnimal);
clearButton.addEventListener("click", function () {
    // TODO: Remove ws05Animal and update the displayed result.
    // TODO: Poista ws05Animal ja päivitä sivulla näkyvä tulos.
    localStorage.removeItem("ws05Animal");
    savedAnimal.textContent = "Animal data cleared.";
});

// TODO: Call loadAnimal() here to restore data when the page opens.
// TODO: Kutsu loadAnimal() tässä, jotta tiedot palautuvat sivun avautuessa.
loadAnimal();
