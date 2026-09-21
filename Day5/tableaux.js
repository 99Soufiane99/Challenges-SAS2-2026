// Challenge 1 : Parcours et Affichage
console.log("")
console.log("Challenge 1 : Parcours et Affichage.")
console.log("")

function afficherElements(tab) {
let i = 0
while(i < tab.length) {

    console.log(tab[i])
    i++
}
}

afficherElements([10, 20, 30])

//Challenge 2 : Calculateur de Somme
console.log("")
console.log("Challenge 2 : Calculateur de Somme")
console.log("")

function calculerSomme(tab) {
    let sum = 0
    let i = 0

    while(i < tab.length) {
        sum += tab[i]
        i++
    }
   console.log(sum)
}

calculerSomme([5, 10, 20])


// Challenge 3 : Recherche du Maximum

console.log("")
console.log("Challenge 3 : Recherche du Maximum")
console.log("")


function trouverMax(tab) {
    let firstindex = 0
    let i = 0
    while(i < tab.length) {
        if(tab[firstindex] < tab[i]) {
            firstindex = i
        }
            i++
    }
    console.log(tab[firstindex])
}

trouverMax([12, 45, 7, 89, 23, 100])


// Challenge 4 : Ajout à la Fin (Simulation de push)

console.log("")
console.log("Challenge 4 : Ajout à la Fin (Simulation de push)")
console.log("")


function ajouterALaFin(tab, element) {
let i = 0
    while(i < element.length) {
        tab[tab.length] = element
        i++
    }
    console.log(tab)
}

ajouterALaFin([1, 2, 3], 4)