let villes = ["nantes", "paris", "saint-nazaire", "angers", "le mans"];

villes.forEach(function(ville) {
    return console.log(ville);
});

console.log("Lettre 'a' dans toutes les villes ? => " + villes.every(ville => ville.includes("a")));

console.log("Au moins une ville avec un tiret ? => " + villes.some(ville => ville.includes("-")));

console.log("Villes sans tirets ni espaces => " + villes.filter(ville => !ville.includes("-") && !ville.includes(" ")));

console.log("Villes dont la dernière lettre est 's' + mise en majuscule => " 
+ villes.filter(ville => ville.endsWith("s")).map(function(ville) {
    return ville.toUpperCase();
}) );