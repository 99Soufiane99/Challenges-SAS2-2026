//Challenge 1 : Verifier l'age
let age = 18
if(age >= 18) {
    console.log("Accès autorisé")
}
else if(age <= 18) {
    console.log("Accès refusé")
}


//Challenge 2 : Positif, négatif ou zéro


let num = 2
console.log("Nombre : " + num)
if(num > 0) {
    console.log("Le nombre est positif.")
}

else if(num < 0) {
    console.log("Le nombre est négatif.")
}

else if(num === 0) {
    console.log("Le nombre est égal à zéro.")
}


//Challenge 3 : Vérification d'une note


let note = -1

if(note >= 0 && note <= 20) {
    console.log("Note : " + note)
    if(note >= 10) {
        console.log("Résultat : Admis")
    }
    else if(note <= 10) {
        console.log("Résultat : Non admis")
    }
}
else {
    console.log("invalid note.")
}


//Challenge 4 : Livraison gratuite


let montant = 200
console.log("Montant de la commande : " + montant)
if(montant >= 500 && montant >= 0) {
    
    console.log("Livraison : Gratuite")
    console.log("Total à payer : " + montant)
}
else if(montant <= 500 && montant >= 0) {
    console.log("Livraison : 40 DH")
    console.log("Total à payer : " +( montant + 40) + " DH")
}


// Challenge 5 : Recherche d'Élément (Simulation de includes)


let notee = 10
if(notee < 10) {
    console.log("Échec")
}
else if(notee >= 10 && notee <= 11.99){
    console.log("Passable")
}
else if(notee >= 12 && notee <= 13.99){
    console.log("Assez bien")
}
else if(notee >= 14 && notee <= 15.99){
    console.log("Bien")
}
else if(notee >= 16 && notee <= 17.99){
    console.log("Très bien")
}
else if(notee >= 18 && notee <= 20){
    console.log("Excellent")
}


// Challenge 6 : Menu d'une application


const prompt = require('prompt-sync')()
let option = Number(prompt("Choix : "))
switch(option) {
    case 1:
        console.log("Afficher le profil")
        break
    case 2:
        console.log("Afficher les paramètres")
        break
    case 3:
        console.log("Afficher les notifications")
        break
    case 4:
        console.log("Se déconnecter")
        break
    default :
    console.log("Choix invalide.")
    
}

// Challenge 7 : Jour de la semaine
console.log(`\nChallenge 7 : Jour de la semaine\n`)

let num7 = 0

switch(num7) {
    case 1:
        console.log("Lundi")
    case 2:
        console.log("Mardi")
    case 3:
        console.log("Mercredi")
    case 4:
        console.log("Jeudi")
    case 5:
        console.log("Vendredi")
    case 6:
        console.log("Samedi")
    case 7:
        console.log("Dimanche")
    default:
        console.log("Numéro invalide.")
}

// Challenge 8 : Calculatrice simple
console.log(`\n Challenge 8 : Calculatrice simple \n`)
let number1 = 2
let number2 = 3
let operator = "*"
console.log(`Premier nombre : ${number1}\n Opérateur : ${operator}\nDeuxième nombre : ${number2}\n\n`)
switch(operator) {
    case operator = "/":
        console.log(`resulta : ${number1 / number2}`)
        break
    case operator = "*":
        console.log(`resulta : ${number1 * number2}`)
        break
    case operator = "+":
        console.log(`resulta : ${number1 + number2}`)
        break
    case operator = "-":
        console.log(`resulta : ${number1 - number2}`)
        break
    default:
        console.log(`Opérateur invalide.`)
        break
}