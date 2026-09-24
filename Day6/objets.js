const prompt = require('prompt-sync')()

// Challenge 01 — Profil étudiant
console.log("\nChallenge 01 - Profil etudiant\n")
let student = {
    firstname : "Yassine",
    lastname : "Amrani",
    age : "21",
    city : "Youssoufia",
}
function afficher(objet) {
    console.log("Prénom : " + objet.firstname + "\nNom : " + objet.lastname + "\nAge : " + objet.age + "\nVille : " + objet.city +`\n${student.firstname} ${student.lastname} a ${student.age} ans et habite à ${student.city}.`)
}
afficher(student)

// Challenge 02 — Modifier un profil
console.log("\nChallenge 02 — Modifier un profil\n")
let user = {
    username: "Ahmed",
    age: 22,
    city: "Marrakech",
    status: "student"
};
console.log(`username : ${user.username}\nage : ${user.age}\n`)
user.age = "30"
user.city = "rabat"
user.status = "nan"
user.email = `${user.username}.@gmail.com`
console.log(user)

// Challenge 03 — Produit

console.log("\nChallenge 03 — Produit\n")

let product = {
    name : "pc dell",
    price : 5000,
    category: "pc portable",
    quantity : 10,
    available : false,
}
let prixtotal = (product.price * product.quantity)
console.log(`nom : ${product.name}\nprix : ${product.price} DH\ncategorie : ${product.category}\n`)
if(product.available == false) {
    console.log("stock no't available")
}
else{

    console.log(`prix total : ${prixtotal} DH`)
}


// Challenge 04 — Calculateur de salaire

console.log()
let employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2
};
let penality = employee.absenceDays * 200
let salairefinal = (employee.salary + employee.bonus) - penality
console.log(` salaire de base : ${employee.salary - penality} DH\n Le bonus : ${employee.bonus} DH\n Les pénalités : ${penality}DH\n Le salaire final : ${salairefinal} DH`)

// Challenge 05 — Gestion d'un compte bancaire
console.log(`\nChallenge 05 — Gestion d'un compte bancaire\n`)

let account = {
    owner: "Tayeb",
    balance: 5000,
    type: "saving"
};
function afichersold(objet){
    console.log(`votre sold : ${account.balance} DH`)
}

function deposerargent(objet, deposit){
   let balance = objet.balance + deposit
   return balance
}
function withdraw(objet, withdraw){
    let balance = objet.balance + withdraw
    return balance
}

function verifiersold(objet){
    if(objet.balance > 1){
        console.log("solde est suffisant.")
    }
    else{
        console.log("insufisant")
    } 
}
function afficherinfo(objet){
    console.log(`owner : ${owner}\nbalance : ${balance}\ntype : ${type}`)
    }


