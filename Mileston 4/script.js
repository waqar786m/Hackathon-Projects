"use strict";
// Get reference to the form and dispaly area
const form = document.getElementById("resume-form");
const resumeDisplayElement = document.getElementById("resume-display");
// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent page reload
    // collect input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    // Gemerate the resume content dynamically
    const resumeHTML = `
      <h2><br>Editable Resume</b></h2>
      <h3>Personal Information</h3>
      <p><br>Name</b><span contenteditable="true">${name}</span></p2>
      <p><br>Email</b><span contenteditable="true">${email}</span></p2>
      <p><br>Phone</b><span contenteditable="true">${phone}</span></p2>
      
      <h3>Education</h3>
      <p contenteditable="true">${education}</p>

      <h3>Experience</h3>
      <p contenteditable="true">${experience}</p>

      <h3>Skills</h3>
      <p contenteditable="true">${skills}</p>
      `;
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
