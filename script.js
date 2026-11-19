const signupForm = document.getElementById('registrationForm');
const passwordInput = document.getElementById('password');
const cpasswordInput = document.getElementById('cpassword');
const emailInput = document.getElementById('email');
const userInput = document.getElementById('username');

signupForm.addEventListener('submit', function (event) {
    // Empêche le rechargement de la page par défaut
    event.preventDefault(); 
   
    if (passwordInput.value !== cpasswordInput.value) {
        alert("Les mots de passe ne correspondent pas !");
        return; // Arrête l'exécution si les mots de passe sont différents
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