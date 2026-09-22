// Challenge 1 : Compteur de Caractères

console.log("")
console.log("Challenge 1 : Compteur de Caractères")
console.log("")

function compterCaracteres(chaine) {
    let i = 0
    while(chaine[i] != undefined) {
        i++
    }
    console.log(i)
}
compterCaracteres("test")


// Challenge 2 : Compteur d'Occurrences d'un Caractère


console.log("")
console.log("Challenge 2 : Compteur d'Occurrences d'un Caractère")
console.log("")

function compterLettre(chaine, lettre) {
    let i = 0
    let j = 0
    while(chaine[j] != undefined) {
        j++
    }
    length = j
    j = 0
    while(i <= length) {
        if(chaine[i] == lettre) {
            j++
        }
        i++
    }
    console.log(j)
}

compterLettre("javascript", "a")


// Challenge 3 : Inverseur de Chaîne


console.log("")
console.log("Challenge 3 : Inverseur de Chaîne")
console.log("")


function inverserChaine(chaine) {
    let str = ""
    let i = 0
    let len = chaine.length - 1
    while(i < chaine.length) {
        str += chaine[len]
        len--
        i++
    }
    return str
}

let q = inverserChaine("hello")
console.log(q)


// Challenge 4 : Compteur de Voyelles

console.log("\n // Challenge 4 : Compteur de Voyelles \n")

function compterVoyelles(chaine) {
    let nombrevoyelle = 0
    for(let i = 0 ; i <= chaine.length ; i++) {
        if(chaine[i] == 'a') {
            nombrevoyelle += 1
        }
    }
    return nombrevoyelle
}
let chain = compterVoyelles("daveloppeur")
console.log(chain)

// Challenge 5 : Test de Palindrome

console.log("\n Challenge 5 : Test de Palindrome \n")

function estPalindrome(chaine) {
    let inverse = inverserChaine(chaine)
    let check = false
    if(chaine == inverse) {
        check = true
    }
    return check
}

let palindrome = estPalindrome("radar")
console.log(palindrome)