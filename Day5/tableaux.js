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

    tab[tab.length] = element
    console.log(tab)
}

ajouterALaFin([1, 2, 3], "hello")


// Challenge 5 : Recherche d'Élément (Simulation de includes)

console.log("")
console.log("Challenge 5 : Recherche d'Élément (Simulation de includes)")
console.log("")

function contientElement(tab, valeur) {
    let i = 0
    let verifi = false
    while(i < tab.length) {
        if(tab == valeur) {
            verifi = true
        }
        i++
    }
    console.log(verifi)
}

contientElement(["pomme", "banane"], "banane")

// Challenge 6 : Inversion Manuelle (Simulation de reverse)

console.log("")
console.log("// Challenge 6 : Inversion Manuelle (Simulation de reverse)")
console.log("")
let tab = [1, 2, 3 , 4, 5, 6, 7, 8]
function inverserTableau(tab) {
    let i = tab.length - 1
    let j = 0
    let tempoo = 0
    while(i >= (tab.length / 2) ) {
     tempoo = tab[j]
     tab[j] = tab[i]
     tab[i] = tempoo
     i--
     j++
    }
}

inverserTableau(tab)
console.log(tab)

// Challenge 7 : Filtrage Manuel des Nombres Pairs
console.log(`\nChallenge 7 : Filtrage Manuel des Nombres Pairs\n`)

function filtrerPairs(tab){
    let tab2 = []
    let j = 0
    for(let i = 0; i < tab.length; i++){
        if(tab[i] % 2 == 0){
         tab2[j] = tab[i] 
         j++ 
        }
    }
    return tab2
}

let fileter = filtrerPairs([1, 2, 3, 4, 5, 6])
console.log(fileter)