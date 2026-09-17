//Challenge 1 : Profil d'un joueur


let pseudo = "ShadowX"
let niveau = "12"
let age = "21"
let pays = "maroc"
let score = "4580"
console.log("Pseudo : " + pseudo)
console.log("Niveau : " + niveau)
console.log("Âge : " + age)
console.log("Score : " + score)
console.log("Pays : " + pays)


//Challenge 2 : Conversion de monnaie

let budget = "2200"
let budgeteur = budget / 11
console.log("Budget en MAD : " + budget)
console.log("Budget en EUR : " + budgeteur)


//Challenge 3 : Conversion de stockage


let stockage = "10"
let resultat = stockage * 1024
console.log("stockage : " + stockage + " GB")
console.log("Résultat : " + resultat + "MB")


//Challenge 4 : Calcul de consommation d'une voiture



let litre = "35"
let km = "500"
let consommation = ((litre / km) * 100).toFixed(0)
console.log("Distance : " + km + " km")
console.log("Carburant : " + litre + " litres")
console.log("Consommation : " + consommation + " L/100 km")


//Challenge 5 : Catégorie d'un film


let dure = 95
console.log("Durée : " + dure + " minutes")
if(dure <= 60) {
    console.log("Catégorie : Court métrage")
}
else if (dure >= 60 || dure <= 120) {
    console.log("Catégorie : Film standard")
}
else if (dure >= 120) {
    console.log("Catégorie : Film long")
}


//Challenge 6 : Calcul du score d'un examen


let score1, score2, score3, score4, scoretotal, moyenne
score1 = 15
score2 = 12
score3 = 18
score4 = 15
scoretotal = score1 + score2 + score3 + score4
moyenne = scoretotal / 4
console.log("Partie 1 : " + score1)
console.log("Partie 2 : " + score2)
console.log("Partie 3 : " + score3)
console.log("partie 4 : " + score4)
console.log("Score total : " + scoretotal)
console.log("Moyenne : " + moyenne)


//Challenge 7 : Calcul de la note finale


let controlec, projet, exam
controlec = 14
projet = 16
exam = 12
nfinal = ((controlec * 2) + (projet * 3) + (exam * 5)) / 10
console.log("Contrôle continu : " + controlec)
console.log("Projet : " + projet)
console.log("Examen : " + exam)
console.log("Note finale : " + nfinal)
