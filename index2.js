/*Suppose a store has a list of iteams and their price in US Dollars stored as an object.Creat a JavaScript program to convert the price to indian Rupees using an echange rate of  1 USD to 8 NR . The program should use the map higher-order function to creat a new object with the converted price in Rupees.*/ 

const items = [
    {
        name: "Iphone 15",
        category: "Mobile",
        price: 999,
    },
    {
        name: "Macbokk Air",
        category: "Laptop",
        price: 1499,

    },
    {
        name: "Apple Watch",
        category: "Watches",
        price: 499,

    },
];
const exchangeRate = 80; 

function convertToINR(priceInUSD) {
    return priceInUSD * exchangeRate;
}

const itemsInINR = items.map((item) => ({
    ...item,
    priceINR: convertToINR(item.priceUSD),
}));
console.log(itemsInINR);