let nombre1 = 10;
let nombre2 = 20;

function additionner(nb1, nb2) {
    return nb1 + nb2;
}

let resultat1 = additionner(nombre1, nombre2);

console.log("Définition d’une fonction : \r");
console.log("resultat1 = " + resultat1);

let somme = additionner;

let resultat2 = somme(nombre1, nombre2);

console.log("Variable de type fonction : \r");
console.log("resultat2 = " + resultat2);

let multiplication = function(nb1, nb2) {
    return nb1 * nb2;
}

let resultat3 = multiplication(nombre1, nombre2);

console.log("resultat3 = " + resultat3);

console.log("Fonction comme élément du 1er ordre : \r");

let afficherOperation = function(nomOperation, operation, nb1, nb2) {
    return nomOperation + "(" + nb1 + ", " + nb2 + ") = " + operation(nb1, nb2);
}

let resultat4 = afficherOperation("Somme", somme, 20, 40);

console.log("resultat4 = " + resultat4);

let resultat5 = afficherOperation("Multiplication", multiplication, 10, 20);

console.log("resultat5 = " + resultat5);

let resultat6 = afficherOperation("Soustraction", function (nb1, nb2) {return nb1 - nb2}, 15, 5);

console.log("resultat6 = " + resultat6);
