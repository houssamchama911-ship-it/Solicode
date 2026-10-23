let ventes = [110, 75, 150, 180, 90, 130, 100, 160];

// Le nombre total de ventes
let nombreTotalVentes = ventes.length; 

let chiffreAffairesTotal = 0;          
let venteMax = ventes[0];              
let venteMin = ventes[0];              
let nbrVentesExceptionnelles = 0;   
let caVentesExceptionnelles = 0;       

for (let i = 0; i < ventes.length; i++) {
    let vente = ventes[i]; 
   chiffreAffairesTotal += vente;

    // Le maximum du vente
    if (vente > venteMax) {
        venteMax = vente;
    }

    // Le minimum du vente
    if (vente < venteMin) {
        venteMin = vente;
    }


    if (vente >= 130) {
        nbrVentesExceptionnelles++;   
        caVentesExceptionnelles += vente; 
    }
}


console.log("=== SYNTHÈSE DES VENTES MENSUELLES ===");
console.log("Nombre total de ventes :" +nombreTotalVentes);
console.log("Chiffre d'affaires total :" +chiffreAffairesTotal);
console.log("Vente la plus élevée (Max) :" +venteMax);
console.log("Vente la plus faible (Min) :" +venteMin);
console.log("Nombre de ventes exceptionnelles :" +nbrVentesExceptionnelles);
console.log("CA des ventes exceptionnelles :" +caVentesExceptionnelles);