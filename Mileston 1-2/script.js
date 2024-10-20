"use strict";
const toggleButton = document.getElementById("toggle-skills");
const Skills = document.getElementById("skills");
toggleButton.addEventListener("click", () => {
    if (Skills.style.display === "none") {
        Skills.style.display = "block";
    }
    else {
        Skills.style.display = "none";
    }
});
