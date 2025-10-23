console.log("Hello World!");

let prenom = prompt("Quel est votre prénom ?");
console.log(`Wesh, ${prenom} !`);


let nombre = prompt("Donne un numero ");
let resultat = 1;
for (let i = nombre; i >= 1; i--) {
    resultat = resultat * i;
}
console.log(resultat);
