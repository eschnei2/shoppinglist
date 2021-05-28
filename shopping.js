const food = [
    {
        id: 1,
        name: "Milk",
        price: 1.99
    },
    {
        id: 2,
        name: "Eggs",
        price: 1.99
    },
    {
        id: 3,
        name: "Pizza rolls",
        price: 3.99
    },
    {
        id: 4,
        name: "Chicken Breast",
        price: 5.99
    },
]

const addToShoppingList = (foodObject) => {
    const lastIndex = food.length - 1
    const currentLastfood = food[lastIndex]
    const maxId = currentLastfood.id
    const idForNewfood = maxId + 1

    foodObject.id = idForNewfood
    food.push(foodObject)
}

let today = new Date()
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

const beef = {
    name: "Chuck Roast",
    price: 8.99,
    dateCreated: date
}
const bread = {
    name: "Whole Wheat Bread",
    price: 4,
    dateCreated: date
}
const cheese = {
    name: "Munster Cheese",
    price: 10,
    dateCreated: date
}
const potato = {
    name: "Russet Potato",
    price: 4.50,
    dateCreated: date
}
const onion = {
    name: "White Onion",
    price: 6.39,
    dateCreated: date
}

addToShoppingList(beef)
addToShoppingList(bread)
addToShoppingList(cheese)
addToShoppingList(potato)
addToShoppingList(onion)

for (const eater of food) {
    if (eater.price > 8) {
        console.log(`Your pricer item is ${eater.name}
        with a price of ${eater.price} USD`)
    }
}

/* console.log(food.length) */ // this was an experiment