# 🚀 Guide d'Apprentissage JavaScript - Technique de Feynman

> **Objectif** : Maîtriser JavaScript en appliquant la Technique de Feynman - Expliquer simplement pour bien comprendre

---

## 📚 Table des Matières

1. [Introduction à JavaScript](#introduction-à-javascript)
2. [Concepts Fondamentaux](#concepts-fondamentaux)
3. [Exercices Pratiques](#exercices-pratiques)
4. [Ressources Complémentaires](#ressources-complémentaires)

---

## 🎯 Introduction à JavaScript

### Qu'est-ce que JavaScript ?

**Technique de Feynman** : *"JavaScript, c'est comme un magicien qui vit dans ton navigateur web. Quand tu cliques sur un bouton, le magicien dit 'Oh ! Quelqu'un a cliqué !' et il fait apparaître quelque chose de nouveau sur la page."*

### Pourquoi apprendre JavaScript ?

- 🌐 **Langage du web** - Indispensable pour rendre les sites interactifs
- 🧠 **Penser programmation** - Comprendre la logique commune à tous les langages
- 🔄 **Transition Ruby → JS** - Même logique, syntaxe différente

### Historique

- **1995** : Créé par Brendan Eich (Netscape)
- **2009** : ES5 (version largement adoptée)
- **2015** : ES6/ES2015 (version moderne)
- **Aujourd'hui** : ES9+ (versions annuelles)

---

## 🧠 Concepts Fondamentaux

### 1. Variables et Types

#### 🎯 Technique de Feynman - Variables

> *"Une variable, c'est comme une boîte avec une étiquette. Tu mets quelque chose dedans et tu peux le récupérer plus tard."*

```javascript
// Déclaration de variables
let monNom = "Alice";           // Modifiable
const monAge = 25;              // Constante
var ancienneFacon = "Éviter";   // Ancienne syntaxe

// Types de données
let texte = "Bonjour";          // String
let nombre = 42;                // Number
let vrai = true;                // Boolean
let rien = null;                // Null
let indefini;                   // Undefined
```

#### 🔍 Vérification des types

```javascript
console.log(typeof texte);      // "string"
console.log(typeof nombre);     // "number"
console.log(typeof vrai);       // "boolean"
```

### 2. Opérateurs Arithmétiques

```javascript
let a = 10;
let b = 3;

console.log(a + b);    // 13 (addition)
console.log(a - b);    // 7 (soustraction)
console.log(a * b);    // 30 (multiplication)
console.log(a / b);    // 3.33... (division)
console.log(a % b);    // 1 (modulo - reste)
```

### 3. Chaînes de Caractères

#### Concaténation

```javascript
let prenom = "Alice";
let nom = "Dupont";
let nomComplet = prenom + " " + nom;  // "Alice Dupont"
```

#### Template Literals (Backticks)

```javascript
let age = 25;
let ville = "Paris";
let message = `Bonjour, je m'appelle ${prenom}, j'ai ${age} ans et j'habite à ${ville}`;
```

#### Méthodes de chaînes

```javascript
let texte = "Hello World";
console.log(texte.length);           // 11
console.log(texte.toUpperCase());    // "HELLO WORLD"
console.log(texte.toLowerCase());    // "hello world"
console.log(texte.indexOf("World")); // 6
```

### 4. Arrays (Tableaux)

```javascript
let fruits = ["pomme", "banane", "orange"];

// Accès
console.log(fruits[0]);        // "pomme"
console.log(fruits.length);   // 3

// Modification
fruits.push("kiwi");          // Ajouter à la fin
fruits.unshift("fraise");     // Ajouter au début
let dernier = fruits.pop();   // Retirer le dernier
let premier = fruits.shift();  // Retirer le premier
```

### 5. Objets Littéraux

```javascript
let personne = {
    nom: "Alice",
    age: 25,
    ville: "Paris",
    etudiant: false
};

// Accès
console.log(personne.nom);        // "Alice"
console.log(personne["age"]);     // 25

// Modification
personne.age = 26;                // Modifier
personne.job = "Développeuse";     // Ajouter
```

### 6. Conditions

```javascript
let temperature = 25;

if (temperature > 30) {
    console.log("Il fait chaud !");
} else if (temperature > 20) {
    console.log("Il fait bon !");
} else {
    console.log("Il fait frais !");
}
```

#### Opérateurs de comparaison

```javascript
let x = 5;
let y = "5";

console.log(x == y);   // true (égalité de contenu)
console.log(x === y);  // false (égalité de contenu ET type)
console.log(x != y);   // false (différence de contenu)
console.log(x !== y);  // true (différence de contenu OU type)
```

### 7. Boucles

#### Boucle for

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(`Compteur : ${i}`);
}
```

#### Boucle for...in (objets)

```javascript
for (let cle in personne) {
    console.log(`${cle}: ${personne[cle]}`);
}
```

#### Boucle for...of (arrays)

```javascript
for (let fruit of fruits) {
    console.log(fruit);
}
```

### 8. Fonctions

#### Fonction classique

```javascript
function direBonjour(nom) {
    return `Bonjour ${nom} !`;
}

console.log(direBonjour("Alice")); // "Bonjour Alice !"
```

#### Fonction fléchée (Arrow Function)

```javascript
const additionner = (a, b) => a + b;
console.log(additionner(3, 4)); // 7
```

#### Fonction anonyme

```javascript
const multiplier = function(x, y) {
    return x * y;
};
console.log(multiplier(5, 6)); // 30
```

### 9. Interaction Utilisateur

```javascript
// Demander à l'utilisateur
let nom = prompt("Quel est votre nom ?");

// Afficher dans la console
console.log(`Bonjour ${nom} !`);
```

---

## 🎯 Exercices Pratiques

### Script 1 - Hello World

**Objectif** : Premiers pas avec variables et affichage

```javascript
// 1.1. Bonjour
console.log("Bonjour monde");

// 1.2. Salut personnalisé
let prenom = prompt("Quel est ton prénom ?");
console.log(`Bonjour, ${prenom} !`);
```

**Concepts appris** :
- `console.log()` - Afficher dans la console
- `prompt()` - Demander à l'utilisateur
- Variables avec `let`
- Template literals avec backticks

### Script 2 - Calculatrice de Factorielle

**Objectif** : Fonctions et boucles

```javascript
function factorielle(n) {
    if (n < 0) return "Erreur : nombre négatif";
    if (n === 0 || n === 1) return 1;
    
    let resultat = 1;
    for (let i = 2; i <= n; i++) {
        resultat *= i;
    }
    return resultat;
}

let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
let nombreEntier = parseInt(nombre);
let resultat = factorielle(nombreEntier);
console.log(`Le résultat est : ${resultat}`);
```

**Concepts appris** :
- Déclaration de fonctions
- Boucles `for`
- Conditions `if/else`
- Conversion de types avec `parseInt()`

### Script 3 - Pyramide de Mario

**Objectif** : Boucles imbriquées

```javascript
let etages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let nombreEtages = parseInt(etages);

for (let i = 1; i <= nombreEtages; i++) {
    let ligne = "";
    
    // Espaces
    for (let j = 0; j < nombreEtages - i; j++) {
        ligne += " ";
    }
    
    // Dièses
    for (let k = 0; k < i; k++) {
        ligne += "#";
    }
    
    console.log(ligne);
}
```

**Concepts appris** :
- Boucles imbriquées
- Construction de chaînes caractère par caractère
- Logique de positionnement

### Script 4 - Analyse des Entrepreneurs

**Objectif** : Arrays et objets

```javascript
const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    // ... plus d'entrepreneurs
];

// 1. Entrepreneurs nés dans les années 70
let annees70 = entrepreneurs.filter(entrepreneur => 
    entrepreneur.year >= 1970 && entrepreneur.year <= 1979
);

// 2. Prénoms et noms
let noms = entrepreneurs.map(entrepreneur => 
    `${entrepreneur.first} ${entrepreneur.last}`
);

// 3. Âge actuel
let anneeActuelle = new Date().getFullYear();
entrepreneurs.forEach(entrepreneur => {
    let age = anneeActuelle - entrepreneur.year;
    console.log(`${entrepreneur.first} ${entrepreneur.last} aurait ${age} ans`);
});

// 4. Tri par nom de famille
let tries = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
```

**Concepts appris** :
- Arrays d'objets
- Méthodes d'array : `filter()`, `map()`, `forEach()`, `sort()`
- Fonctions fléchées
- Objet `Date`

### Script 5 - Bibliothécaire

**Objectif** : Manipulation d'arrays complexes

```javascript
const livres = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps perdu', id: 237634, rented: 28 },
    // ... plus de livres
];

// 1. Tous les livres empruntés ?
let tousEmpruntes = livres.every(livre => livre.rented > 0);

// 2. Livre le plus emprunté
let plusEmprunte = livres.reduce((max, livre) => 
    livre.rented > max.rented ? livre : max
);

// 3. Livre le moins emprunté
let moinsEmprunte = livres.reduce((min, livre) => 
    livre.rented < min.rented ? livre : min
);

// 4. Recherche par ID
let livreId = livres.find(livre => livre.id === 873495);

// 5. Suppression
let indexASupprimer = livres.findIndex(livre => livre.id === 133712);
if (indexASupprimer !== -1) {
    livres.splice(indexASupprimer, 1);
}

// 6. Tri alphabétique
let livresTries = livres.sort((a, b) => a.title.localeCompare(b.title));
```

**Concepts appris** :
- Méthodes d'array avancées : `every()`, `reduce()`, `find()`, `findIndex()`, `splice()`
- Logique de recherche et filtrage
- Manipulation d'arrays

### Script 6 - Code Génétique

**Objectif** : Objets complexes et logique métier

```javascript
const codeGenetique = {
    // Sérine
    'UCU': 'Sérine', 'UCC': 'Sérine', 'UCA': 'Sérine', 'UCG': 'Sérine',
    'AGU': 'Sérine', 'AGC': 'Sérine',
    
    // Proline
    'CCU': 'Proline', 'CCC': 'Proline', 'CCA': 'Proline', 'CCG': 'Proline',
    
    // Leucine
    'UUA': 'Leucine', 'UUG': 'Leucine',
    
    // Phénylalanine
    'UUU': 'Phénylalanine', 'UUC': 'Phénylalanine',
    
    // Arginine
    'CGU': 'Arginine', 'CGC': 'Arginine', 'CGA': 'Arginine', 'CGG': 'Arginine',
    'AGA': 'Arginine', 'AGG': 'Arginine',
    
    // Tyrosine
    'UAU': 'Tyrosine', 'UAC': 'Tyrosine'
};

function decouperEnCodons(arn) {
    let codons = [];
    for (let i = 0; i < arn.length; i += 3) {
        let codon = arn.slice(i, i + 3);
        if (codon.length === 3) {
            codons.push(codon);
        }
    }
    return codons;
}

function traduireARN(arn) {
    let codons = decouperEnCodons(arn);
    let acidesAmines = [];
    
    for (let codon of codons) {
        let acideAmine = codeGenetique[codon];
        if (acideAmine) {
            acidesAmines.push(acideAmine);
        } else {
            acidesAmines.push('Inconnu');
        }
    }
    
    return acidesAmines.join('-');
}

// Test
let arn = "CCGUCGUUGCGCUACAGC";
let proteine = traduireARN(arn);
console.log(`Protéine : ${proteine}`);
```

**Concepts appris** :
- Objets complexes comme dictionnaires
- Manipulation de chaînes caractère par caractère
- Logique métier complexe
- Gestion d'erreurs

### Script 7 - Acné-Bot

**Objectif** : Conditions complexes et interaction

```javascript
function analyserPhrase(phrase) {
    // Règle 1: Question
    if (phrase.endsWith("?")) {
        return "Ouais Ouais...";
    }
    
    // Règle 2: Majuscules (cri)
    if (phrase === phrase.toUpperCase() && phrase.length > 0) {
        return "Pwa, calme-toi...";
    }
    
    // Règle 3: Mot "Fortnite"
    if (phrase.toLowerCase().includes("fortnite")) {
        return "on s' fait une partie soum-soum ?";
    }
    
    // Règle 4: Message vide
    if (phrase.trim() === "") {
        return "t'es en PLS ?";
    }
    
    // Règle 5: Autre
    return "balek.";
}

function demarrerAcneBot() {
    console.log("🤖 Acné-Bot est prêt à discuter !");
    
    while (true) {
        let message = prompt("Vous : ");
        
        if (message === null || message.toLowerCase() === 'quit') {
            console.log("🤖 Acné-Bot : Bon, j'ai autre chose à faire... À plus !");
            break;
        }
        
        let reponse = analyserPhrase(message);
        console.log(`🤖 Acné-Bot : ${reponse}`);
    }
}

demarrerAcneBot();
```

**Concepts appris** :
- Conditions complexes avec priorités
- Boucles infinies avec `while(true)`
- Gestion des entrées utilisateur
- Logique de conversation

---

## 🧠 Technique de Feynman - Récapitulatif

### Questions pour vérifier votre compréhension :

1. **Peux-tu m'expliquer une variable comme si j'avais 5 ans ?**
2. **Quelle est la différence entre `let` et `const` ?**
3. **Pourquoi utilise-t-on des template literals (backticks) ?**
4. **Comment fonctionne une boucle `for` ?**
5. **Quelle est la différence entre `==` et `===` ?**

### Analogies techniques :

- **Variable** : Boîte avec étiquette
- **Fonction** : Machine qui transforme des ingrédients en plat
- **Array** : Liste de courses numérotée
- **Objet** : Fiche d'identité avec plusieurs informations
- **Boucle** : Répéter une action plusieurs fois
- **Condition** : Décision basée sur une situation

---

## 🚀 Prochaines Étapes

1. **Pratiquez** chaque script un par un
2. **Testez** dans votre navigateur
3. **Modifiez** les exercices pour comprendre
4. **Créez** vos propres variations
5. **Explorez** les concepts avancés

---

## 📚 Ressources Complémentaires

- [MDN JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [CodeCademy JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)

---

*"La meilleure façon d'apprendre, c'est d'expliquer ce qu'on vient d'apprendre à quelqu'un d'autre."* - Richard Feynman
