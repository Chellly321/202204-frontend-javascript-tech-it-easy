// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
let count = 0;
for (i = 0; i < inventory.length; i++){
    const element = inventory[i];
    count = count + element.sold;
};
console.log(count);

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
let soldTvNumbers = document.querySelector(".soldTvNumber");
soldTvNumbers.textContent = count;

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
let purchaseCount = 0;
for (i = 0; i < inventory.length; i++){
    const element = inventory[i];
    purchaseCount = purchaseCount + element.originalStock;
};
console.log(purchaseCount);

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
let purchasedTvNumber = document.querySelector(".purchasedTvNumber");
purchasedTvNumber.textContent = purchaseCount;

// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
let remainSold = document.querySelector(".remainSold");
remainSold.textContent = purchaseCount - count;