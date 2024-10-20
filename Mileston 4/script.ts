// Get reference to the form and dispaly area

const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;


// Handle form submission
form.addEventListener('submit', (event: Event) => {
   event.preventDefault(); // prevent page reload
   
    // collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

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
      if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML
      }else{
        console.error('The resume display element is missing.');
      } 
});
