"use strict";
// Get reference to the form and dispaly area
const form = document.getElementById("resume-form");
const resumeDisplayElement = document.getElementById("resume-display");
const sherableLinkContainer = document.getElementById("sherable-link-container");
const sherableLinkElement = document.getElementById("sherable-link");
const downloadPdfButton = document.getElementById("download-pdf");
// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent page reload
    // collect input values
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key
    const resumeData = {
        name,
        email,
        phone,
        education,
        experience,
        skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // saving the data locally
    // Gemerate the resume content dynamically
    const resumeHTML = `
      <h2>Editable Resume</h2>
      <h3>Personal Information</h3>
      <p><b>Name:</b><span contenteditable="true">${name}</span></p>
      <p><b>Email:</b><span contenteditable="true">${email}</span></p>
      <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
      
      <h3>Education</h3>
      <p contenteditable="true">${education}</p>

      <h3>Experience</h3>
      <p contenteditable="true">${experience}</p>

      <h3>Skills</h3>
      <p contenteditable="true">${skills}</p>
      `;
    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate a sherable URL with the username only
    const sherableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;
    // Display the sherable link
    sherableLinkContainer.style.display = 'block';
    sherableLinkElement.href = sherableURL;
    sherableLinkElement.textContent = sherableURL;
});
// Handle PDF download
downloadPdfButton === null || downloadPdfButton === void 0 ? void 0 : downloadPdfButton.addEventListener('click', () => {
    window.print(); // This will open the print dialog and allow the user to save as PDF 
});
// prefull the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        const saveResumeData = localStorage.getItem(username);
        if (saveResumeData) {
            const resumeData = JSON.parse(saveResumeData);
            document.getElementById('username').value = resumeData.username(document.getElementById('name')).value = resumeData.name(document.getElementById('email')).value = resumeData.email(document.getElementById('phone')).value = resumeData.phone(document.getElementById('education')).value = resumeData.education(document.getElementById('experience')).value = resumeData.experience(document.getElementById('skills')).value = resumeData.skills;
        }
    }
});
