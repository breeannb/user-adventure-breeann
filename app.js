

// get the form from the dom 
const myForm = document.getElementById('user-form'); 


// create a form event listener 
myForm.addEventListener('submit', (event) => {
    // always prevent default for the form 
    event.preventDefault(); 

    const form = new FormData(myForm); // now we havwe a form 

    // console.log(form.get('class'), form.get('name')); 

}); 