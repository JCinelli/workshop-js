function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.nomComplet = function() {
        return "Nom => " + this.nom + " , Prénom => " + this.prenom + " , Pseudo => " + this.pseudo;
    }
    this.initiales = function() {
        return this.prenom.charAt(0) + this.nom.charAt(0);
    };
}

var jules = new Personne("LEMAIRE", "Jules", "jules77");
var paul = new Personne("LEMAIRE", "Paul", "paul44");

function afficherPersonne(personne) {
    console.log(personne.nom);
    console.log(personne.prenom);
    console.log(personne.pseudo);
    console.log(personne.nomComplet)
}

console.log("Affichage de l'objet jules => ");
afficherPersonne(jules);

console.log("\nAffichage de l'objet paul => ");
afficherPersonne(paul);

jules.pseudo = "jules44";
console.log("\nAffichage de l'objet jules après modification =>");
console.log(jules.nomComplet);

console.log("\nAge de l'objet jules avant création =>");
console.log(jules.age);

Personne.prototype.age = "NON RENSEIGNE";

console.log("\nAge de l'objet jules après création =>");
console.log(jules.age);

jules.age = 30;

console.log("\nAge de l'objet jules après ajout d'une valeur =>");
console.log(jules.age + " ans");

console.log("\nInitiales de l'objet jules =>");
console.log(jules.initiales);

var robert = {
    nom : "LEPREFET",
    prenom : "Robert",
    pseudo : "robert77", 
    nomComplet : function() {
        return "Nom => " + this.nom + ", Prénom => " + this.prenom + ", Pseudo => " + this.pseudo;
    }
};

console.log("\nAffichage de l'objet robert => ");
afficherPersonne(robert);