const prompt = require("promet-sync")();
let note = [];
let taille = Number(prompt("Entre le nombre des notes:"));
let somme = 0;
let compteur = 0;

for (let j = 0; j < taille ; j++){
    note[j] = Number(promt('entre note of student {j + 1} :'));
    somme += note[j];
}
let moyenne = somme / taille;

console.log('list of note : ${notes}');
console.log('total of note : ${somme}');
console.log('moyen of note : ${moyenne}');