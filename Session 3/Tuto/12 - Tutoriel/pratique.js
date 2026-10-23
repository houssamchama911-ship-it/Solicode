// 2.1. Value Search
console.log(`================= Value Search ================= `);

let prenoms = ["Ali", "Sara", "Yassine", "Nadia", "Karim"];

let cible = "Nadia";

for (let i = 0; i < prenoms.length; i++) {
  if (prenoms[i] === cible) {
    console.log(`Nadia se trouve à l'index ${i}`);
  }
}

// 2.2. Extremes (Max and Min)
console.log(`================= Extremes (Max and Min) ================= `);

let notes = [12, 17, 9, 14, 18, 11];
let max = notes[0];
let min = notes[0];

for (let i = 0; i < notes.length; i++) {
  // max
  if (notes[i] > max) {
    max = notes[i];
  }

  // min
  if (notes[i] < min) {
    min = notes[i];
  }
}

console.log(`Max : ${max}, Min : ${min}`);

// 2.3.Work to be done
console.log(`================= Work to be done ================= `);
let nombres = [23, 15, 42, 9, 31, 18, 42, 5];

max = nombres[0];
min = nombres[0];

let maxIndex = [0];
let minIndex = [0];
let recherche = 31;
let positionRecherch = -1;

for (let i = 0; i < nombres.length; i++) {
  // max
  if (nombres[i] > max) {
    max = nombres[i];
    maxIndex = i;
  }

  // min
  if (nombres[i] < min) {
    min = nombres[i];
    minIndex = i;
  }

  if (nombres[i] === recherche) {
    positionRecherch = i;
    break;
  }
}

console.log(`Maximum : ${max} (Index : ${maxIndex})`);
console.log(`Minimum : ${min} (Index : ${minIndex})`);

if (positionRecherch !== -1) {
  console.log(`La valeur ${recherche} est présente dans le tableau.`);
} else {
  console.log(`La valeur ${recherche} est introuvable.`);
}
