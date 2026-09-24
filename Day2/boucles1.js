// Challenge 1 : Compter les participants
console.log("")
console.log("Challenge 1 : Compter les participants")
console.log("")

const prompt = require('prompt-sync')()
let number = prompt("Nombre de participants : ")
for(let i = 1; i <= number; i++) {
    console.log("Participant " + i)
}



// Challenge 2 : Afficher les nombres pairs


console.log("")
console.log("Challenge 2 : Afficher les nombres pairs")
console.log("")

let number2 = prompt("N = ")
for(let i = 2 ; i <= number2; i += 2) {
    console.log(i)
}


// Challenge 3 : Somme des nombres


console.log("")
console.log("Challenge 3 : Somme des nombres")
console.log("")

let number3 = prompt("N = ")
let somme = 0
for(let i = 0; i <= number3; i++) {
    somme += i
}
console.log("Somme : " + somme)


// Challenge 4 : Table de multiplication


console.log("")
console.log("Challenge 4 : Table de multiplication")
console.log("")


let number4 = prompt("Nombre : ")
console.log("")

for(let i = 1; i <= 10; i++) {
    console.log(number4 + " * " + i + " = " + (number4 * i))
}


// Challenge 5 : Compter les multiples


console.log("")
console.log("Challenge 5 : Compter les multiples")
console.log("")

let number5 = +prompt("N = ")
let numberx = +prompt("X = ")
for(let i = 1; i <= number5; i++) {
    if(i % numberx == 0) {
        console.log(i)
    }
}



//Challenge 6 : Compte à rebours
console.log("")
console.log("Challenge 6 : Compte à rebours")
console.log("")


let number6 = prompt("Départ : ")
console.log("")
let i = 0
while(i <= number6) {
    console.log(number6)
    number6--
}
console.log("")
console.log("Décollage !")


//Challenge 7 : Trouver le premier nombre supérieur


console.log("")
console.log("Challenge 7 : Trouver le premier nombre supérieur")
console.log("")

let number7 = 100
let i7 = 1
while(i7 <= number7) {
    if(i7 * i7 > number7) {
        console.log("Résultat : " + i7 )
        break
    }
    i7++
    }


// Challenge 8 : Accumulation de points


console.log("\n Challenge 8 : Accumulation de points \n")

let mission = 5
let i8 = 1
while(i8 <=5) {
    console.log("Mission "+ i8 +" -> Score : " + (100 * i8))
    i8++
}

// Challenge 9 : Trouver une puissance
console.log(`\n Challenge 9 : Trouver une puissance\n`)
let base = 2
let exposant = 5
let result = 1
let i9 = 0
while(i9 < exposant){
    result = result * base
    i9++
}
console.log(result)
