// 2.3 delevrable
let panier = [15, 42, 5, 89, 12, 50, 8];
let total = 0;
let expensive = 0;
let montantArticlesChers = 0;

for (let i = 0; i < panier.length; i++) {
  total += panier[i];

  if (panier[i] >= 20) {
    expensive++;
    montantArticlesChers += panier[i];
  }
}

console.log(`the total sum of all items in the basket ${total}`);
console.log(`price greater than or equal to 20 ${expensive}`);
console.log(`the total of expencive items ${montantArticlesChers}`);

console.log(
  `========================================================================`,
);

// 2.1

let mots = ["chat", "ordinateur", "table", "programmation", "js", "tv"];
let motsLong = 0;

for (let i = 0; i < mots.length; i++) {
  console.log(mots[i], "->", mots[i].length);

  if (mots[i].length > 5) {
    motsLong++;
  }

  if (mots[i][0] === "t") {
    console.log(`mot ${mots[i]} started with "t" `);
  }
}

console.log(`nombre des mots avec plus de 5 lettre: ${motsLong}`);

// 2.2
let nombres = [4, 7, 2, 9, 5, 8];
let sommePairs = 0;

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] % 2 === 0) {
    sommePairs++;
  }
}

console.log(`somme des nombres pairs: ${sommePairs}`);
