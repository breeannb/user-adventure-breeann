// imports 
import makeUser from './make-user.js'; 

// get the form from the dom 
const myForm = document.getElementById('user-form'); 


// create a form event listener 
myForm.addEventListener('submit', (event) => {
    // always prevent default for the form 
    event.preventDefault(); 

    const formData = new FormData(myForm); // now we have a form 

    // console.log(form.get('class'), form.get('name')); 


    const user = makeUser(formData); 

    // stringify and put to local storage 
    const stringyUser = JSON.stringify(user); 
    localStorage.setItem('USER', stringyUser);

}); 