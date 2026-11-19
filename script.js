const signupForm = document.getElementById('registrationForm');
const passwordInput = document.getElementById('password');
const cpasswordInput = document.getElementById('cpassword');
const emailInput = document.getElementById('email');
const userInput = document.getElementById(`username`)
// déclarations des elements de formulaire 
signupForm.addEventListener(`sumit`,function(event){
if( passwordInput.value !== cpasswordInput.value){
    alert("les mots de passe ne correspondent pas ")
    return
}

    const userData = {
        password: passwordInput.value,
        email: emailInput.value,
        username: userInput.value,
        
    };




    localStorage.setItem('userData', JSON.stringify(userData));
    alert("Inscription réussie !");
    signupForm.reset();
});
