let ticket = {
    nomFilm : "THE DELIVRANCE",
    prix: 3000,
    numeroSalle: 14
}
 const nom = "Rachel"

 console.log ("Bonjour",nom,", votre film" ,ticket.nomFilm, "est en salle", ticket.numeroSalle)

ticket.auteur="grace TAKOUDA"

let texteAffichage = "Bonjour "+nom + ", pour suivre le film "+ticket.nomFilm+ " de l'auteur " +ticket.auteur+", il te faut payer "+ticket.prix + " FCFA"

console.log(texteAffichage)