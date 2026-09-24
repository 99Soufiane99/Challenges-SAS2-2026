// Challenge 1 : Le Salueur Automatique

console.log("")
console.log("Challenge 1 : Le Salueur Automatique")
console.log("")

function afficherBienvenue() {
    console.log("Bienvenue dans le cours de JavaScript ! Bonne chance.")
}
afficherBienvenue()

// Challenge 2 : Calculateur d'Âge Canin


console.log("")
console.log("Challenge 2 : Calculateur d'Âge Canin")
console.log("")

function calculerAgeChien(ageHumain) {
    console.log(ageHumain * 7)
}
calculerAgeChien(4)


// Challenge 3 : Générateur d'Email Professionnel

console.log("")
console.log("Challenge 3 : Générateur d'Email Professionnel")
console.log("")

function genererEmail(prenom, nom) {
    let email = (prenom + "." + nom + "@entreprise.com")
    console.log(email)
}

genererEmail("hello", "soufiane")


// Challenge 4 : Salutation Personnalisée avec Valeur par Défaut
console.log("\n Challenge 4 : Salutation Personnalisée avec Valeur par Défaut \n")

function saluerClient(nom, titre = "Client") {
   console.log("Bonjour " + titre + " " + nom)
}
saluerClient("soufiane")


// Challenge 5 : Le Somateur Universel (Rest Parameter)
console.log("\n Challenge 5 : Le Somateur Universel (Rest Parameter)\n")

function additionnerTout(...args) {
    let result = 0
    for(let i = 0; i < args.length; i++) {
        result += args[i]
    }
    return result
}
let result = additionnerTout(10, 20, 30, 40)
console.log(result)


