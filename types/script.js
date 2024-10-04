let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});


//Ajouter un message d'accueil personnalisé
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    let myName = prompt("Veuillez saisir votre nom.");
    localStorage.setItem("nom", myName); //using API appelée localStorage qui permet de stocker des données dans le navigateur pour pouvoir les réutiliser ultérieurement.
    //la fonction setItem() de l'API permet de stocker la donnée qui nous intéresse dans un conteneur
    myHeading.textContent = "Mozilla est cool, " + myName;
  }
 
  //vérifie si le navigateur possède une donnée enregistrée appelée nom.
  // Si non, la fonction setUserName() est appelée pour créer cette donnée. 
  //Si elle existe (ce qui correspond au cas où l'utilisateur est déjà venu sur la page),
  // on la récupère avec la méthode getItem() 

  if (!localStorage.getItem("nom")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("nom");
    myHeading.textContent = "Mozilla est cool, " + storedName;
  }
  
  myButton.addEventListener("click", function () {
    setUserName();
  });
  