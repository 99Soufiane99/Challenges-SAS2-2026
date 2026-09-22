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


