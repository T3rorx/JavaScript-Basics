let monPrenom = "Flow";
const monAge = 35;

console.log(`${monPrenom}, ${monAge} ans`);

let number1 = 10;
console.log(typeof number1)
let texte1 = "Hello ";
console.log(typeof texte1)
let maReponse = true
console.log(typeof maReponse)

// Calcul avec variables

let number2 = 20;
console.log(number1 ++ );   
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2); 
console.log(number1 % number2);
console.log(number1 ** number2);    
console.log(number1 += number2);    
console.log(number1 -= number2);    
console.log(number1 *= number2);
console.log(number1 /= number2);
console.log(number1 %= number2);
console.log(number1 **= number2);

console.log("Flow est il majeur ?")
if (monAge >= 18) console.log("Vous êtes majeur")
else console.log("Vous êtes mineur")

let feu = "vert";
if (feu === "vert") {
    console.log("Je passe !");
} else {
    console.log("Je m'arrête !");
}

let temperature1 = 20;
if (temperature1 > 25) {
    console.log("Il fait chaud !");
} else if (temperature1 < 10) {
    console.log("Il fait froid !");
} else {
    console.log("Température normale !");
}

let temperature2 = 5;
if (temperature2 > 25) {
    console.log("Il fait chaud !");
} else if (temperature2 < 10) {
    console.log("Il fait froid !");
} else {
    console.log("Température normale !");
}

for (let i = 1; i <= 5; i++)
     console.log(`on va compter jusqu'à 5 : ${i}`); 
     
let j = 5;
while (j >= 0) {
    console.log(`Compte à rebours : ${j}`);
    j--;
}

function demanderNom() {
    let nom = prompt("Quel est votre nom ?");
    console.log(`Bonjour ${nom} !`);
}
demanderNom(); 

let fruits = ["pomme", "banane", "orange"];
console.log(fruits);
fruits.push("kiwi");
console.log(fruits);
console.log(fruits[1]);


let personne = { nom: "Flow", age: 35, ville: "Paris" };
console.log(personne.nom);
console.log(personne.age);
console.log(personne.ville);
personne.age = 36;
console.log(personne.age);
personne.ville = "Lyon";
console.log(personne.ville);
personne.ville = "Marseille";
console.log(personne.ville);
personne.ville = "Nice";
console.log(personne.ville);
personne.ville = "Toulouse";

let animal = { nom: "Chat", age: 5, race: "Siamois" };
console.log(animal.age);

let texte = "Bonjour JavaScript !";
console.log(texte);
console.log(texte.length);
console.log(texte.toUpperCase());
console.log(texte.substring(0, 7));