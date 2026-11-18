const loginForm = document.getElementById("loginform");
const usernamecInput = document.getElementById("usernamec");
const password2Input= document.getElementById("password2");
const cpassword2Input= document.getElementById("password2");

formulaire.addEventListener('submit', function(event) {
  event.preventDefault();

  const emailSaisi = document.getElementById('email2').value.trim();
  
  // Récupérer et convertir la chaîne JSON en objet JavaScript
  const donneesBrutes = localStorage.getItem('userData');
  const utilisateurStocke = donneesBrutes ? JSON.parse(donneesBrutes) : null;

  // Vérifier que l'objet existe avant de comparer
  if (utilisateurStocke && emailSaisi === utilisateurStocke.email) {
    console.log('L’email correspond à l’utilisateur enregistré.');
  } else {
    console.log('Aucune correspondance.');
  }
});
