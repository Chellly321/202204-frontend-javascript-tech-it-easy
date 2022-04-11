// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
let allTvNames = [];
inventory.map(function (value){
    allTvNames.push(value.type);
});

console.log(allTvNames);

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
let soldOutTvs = [];
inventory.map(function (value){
    if (value.originalStock === value.sold){
        soldOutTvs.push(value);
    }
});
console.log(soldOutTvs);

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
let haveAmbiLight = [];
inventory.find(function (value ){
    if (value.options.ambiLight == true){
        haveAmbiLight.push(value);
    }
});
console.log(haveAmbiLight);

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
function sortTvsFromHighToLow (){
    let highToLow = [];
    inventory.sort(function (a, b){
        return a.price - b.price;
    })
    inventory.map(function (value){
        highToLow.push(value);
    })
    return highToLow;
};
console.log(sortTvsFromHighToLow());
