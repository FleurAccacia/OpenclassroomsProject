// console.log("Hello World");

// let motTapeOk = true // Essayez de mettre false à la place de true

// if (motTapeOk) {
//     console.log("Bravo, vous avez correctement tapé le mot")
// } else {
//     console.log("Échec, le mot n'est pas correct")
// }

// // let motUtilisateur = prompt("Veuillez renseigner un mot ici :")
// // console.log(motUtilisateur)

// const motApplication = "Bonjour" // Essayez de mettre un autre mot ici !
// let motUtilisateur = prompt("Entrez le mot : " + motApplication)

// if (motUtilisateur === motApplication) {
//     console.log("Bravo !")
// } else {
//     console.log("Vous avez fait une erreur de frappe.")
// }




const listeMot=["Cachalot","Petunia","Serviette"]

let score=0

for(let cpt =0; cpt<0; cpt++){
    let motEntree= prompt("Veuillez entrer :"+listeMot[cpt])

    if (motEntree===listeMot[cpt]){
        score+=1
    }
        console.log("Votre score est : ",score)
}

// //cas1
// let motEntree= prompt("Veuillez entrer :"+listeMot[0])

// if (motEntree===listeMot[0]){
//     score+=1
// }
// console.log("Votre score est : ",score)

// //cas2
// let motEntree1= prompt("Veuillez entrer :",listeMot[1])

// if (motEntree1===listeMot[1]){
//     score+=1
// }
// console.log("Votre nouveau score est : ",score)


// //cas3
// let motEntree2= prompt("Veuillez entrer :",listeMot[2])

// if (motEntree2===listeMot[2]){
//     score+=1
// }
// console.log("Votre score final est de : ",score)

