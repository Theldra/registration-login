//Get form element by id
const loginForm = document.querySelector('#login');
//Handle form submit event
loginForm.addEventListener('submit',function (event) {event.preventDefault();
    //collect from data
    const formData = new FormData(loginForm);
    //send data to backend
    //display success message to user
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'Login Successfully';
});

//Write fullName function
function fullName(firstName, lastName) {
    // return firstName + lastName;
    return `${firstName} ${lastName}`;
}

const myName = fullName('Etheldra', 'Akahoho');
console.log(myName);
