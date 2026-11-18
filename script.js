const signupForm = document.getElementById('registrationForm');
const passwordInput = document.getElementById('password');
const cpasswordInput = document.getElementById('cpassword');
const emailInput = document.getElementById('email');
const userInput = document.getElementById(`username`)
// déclarations des element de formulaire 
signupForm.addEventListener('submit', function (event) {
   
    if (passwordInput.value !== cpasswordInput.value) {
        alert("Les mots de passe ne correspondent pas !");
        return; // Arrête l'exécution si les mots de passe sont différents
    
    }

    const userData = {
        password: passwordInput.value,
        email: emailInput.value,
        username: userInput.value,
        // Ajoutez d'autres champs ici (ex: nom d'utilisateur, etc.)
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    alert("Inscription réussie !");
    signupForm.reset();
});
// const  1 recup  formulaire d'inscription 

// const  2 confirmation du mot de passe


