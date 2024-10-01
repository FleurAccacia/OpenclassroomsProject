/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/

let inputTexte= document.getElementById ("inputEcriture")
console.log (inputTexte)

let BoutonDeValidation = document.getElementById("btnValiderMot")
console.log (BoutonDeValidation)

let MotProposes= document.querySelector(".zoneProposition")
console.log(MotProposes)

let AfficheScore= document.querySelector(".zoneScore span")
console.log(AfficheScore)

let BoutonDeChoix = document.querySelectorAll(".optionSource input")
console.log(BoutonDeChoix)




lancerJeu()