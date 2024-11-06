//listing element
document.getElementById('form')?.addEventListener('submit', function(event){
    event.preventDefault();

    //type assertion
    const nameElement = document.getElementById('name')   as HTMLInputElement;
    const emailElement = document.getElementById('email')   as HTMLInputElement;
    const phoneElement = document.getElementById('phone')   as HTMLInputElement;
    const objectiveElement = document.getElementById('objective')   as HTMLInputElement;
    const educationElement = document.getElementById('education')   as HTMLInputElement;
    const experienceElement = document.getElementById('experience')   as HTMLInputElement;
    const skillsElement = document.getElementById('skills')   as HTMLInputElement;

    if(nameElement && emailElement && phoneElement && objectiveElement && educationElement && experienceElement && skillsElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const objective = objectiveElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
    
        

    //create resume output
    const resumeOutput =`

    <h2>Resume</h2>
    <p><strong>Name : </strong> ${name}</p>
    <p><strong>Email : </strong> ${email}</p>
    <p><strong>Phone : </strong> ${phone}</p>

    <h3>Objective</h3>
    <p>${objective}</p>

    <h3>Education</h3>
    <p>${education}</p>
    
    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;


    const resumeOutputElement = document.getElementById('resumeOutput');
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    }else{
        console.error('resume output elements are missing')
    }
    
    
    
    }else{
        console.error('one or more output elements are missing')
    }
    

})