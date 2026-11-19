JavaScript
const loginForm = document.getElementById("loginform");

const usernamecInput = document.getElementById("usernamec");
const passwordInput = document.getElementById("password2"); // Corrigé

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Récupération des valeurs saisies
  const emailSaisi = document.getElementById('email2').value.trim();
  const motDePasseSaisi = passwordInput.value.trim();
  
  // Récupérer et convertir la chaîne JSON en objet JavaScript
  const donneesBrutes = localStorage.getItem('userData');
  const utilisateurStocke = donneesBrutes ? JSON.parse(donneesBrutes) : null;

  // Vérifier que l'utilisateur existe dans le localStorage
  if (utilisateurStocke) {
    // Vérification de l'e-mail ET du mot de passe
    if (emailSaisi === utilisateurStocke.email && motDePasseSaisi === utilisateurStocke.password) {
      console.log('Connexion réussie ! Bienvenue.');
     
      // Vous pouvez rediriger l'utilisateur ici, ex: window.location.href = "accueil.html";
    } else {
      console.log('Identifiants incorrects (e-mail ou mot de passe).');
    }
  } else {
    console.log('Aucun compte enregistré trouvé.');
  }
});

