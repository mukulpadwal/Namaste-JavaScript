const myNums = [1,2,3];

const sumWithInitial  = myNums.reduce(function (acc, curr) {
    console.log(`acc : ${acc}, curr : ${curr}`);
    return acc + curr;
}, 0);

console.log(sumWithInitial);


const sumWithInitialArrow  = myNums.reduce((acc, curr) => {
    console.log(`acc : ${acc}, curr : ${curr}`);
    return acc + curr;
}, 0);

console.log(sumWithInitialArrow);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const cartTotal = shoppingCart.reduce((acc, item) => (item.price + acc), 0)

console.log(cartTotal);