var menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    addDishToCourse (courseName, dishName, dishPrice) {
        const newDish = {
            name: dishName,
            price: dishPrice
        };
        return this.courses[courseName].push(newDish);
    },
    getRandomDishfromCourse(courseName) {
        const dishes = this.courses[courseName];
        // console.log(dishes);
        var randomNum = Math.floor(Math.random() * dishes.length);
        return dishes[randomNum];
    },
    generateRandomMeal () {
        const appetizer = this.getRandomDishfromCourse('appetizers');
        const main = this.getRandomDishfromCourse('mains');
        const dessert = this.getRandomDishfromCourse('desserts');
        var total = appetizer.price + main.price + dessert.price;
        return `Your appetizer is the ${appetizer.name}. Your main dish is the ${main.name}. Your dessert is the ${dessert.name}. Your total price is ${total}.`
    }
    }


menu.addDishToCourse("mains", "filet mignon", 30);
menu.addDishToCourse("mains", "cauliflower steak", 20);
menu.addDishToCourse("mains", "mushroom bourgignon", 27);
menu.addDishToCourse("mains", "burger", 15);
menu.addDishToCourse("mains", "cacio e pepe", 25);
menu.addDishToCourse("appetizers", "charcuterie board", 21);
menu.addDishToCourse("appetizers", "southwestern egg rolls", 11);
menu.addDishToCourse("appetizers", "hush puppies", 8);
menu.addDishToCourse("appetizers", "hummus and vegetables", 12);
menu.addDishToCourse("appetizers", "beef tartar", 41);
menu.addDishToCourse("desserts", "tiramisu", 15);
menu.addDishToCourse("desserts", "chocolate cake", 10);
menu.addDishToCourse("desserts", "pie a la mode", 12);
menu.addDishToCourse("desserts", "affogato", 7);

var meal = menu.generateRandomMeal();

console.log (meal);
