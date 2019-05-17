const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    deserts: [],
  },
  get courses() {
    const course = {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      deserts: this._courses.deserts,
    }
    return course;
  },
  addDishToCourse(courseName,dishName,dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    }
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const desert = this.getRandomDishFromCourse('deserts');
    const sum = appetizer.price+main.price+desert.price;
    return `Your meal is ${appetizer.name} as your appetizer, ${main.name} as your main dish and ${desert.name} as your desert.\nThe total price is ${sum}`;
  },
};

const myMenu = Object.create(menu);

myMenu.addDishToCourse('appetizers','salad',5000);
myMenu.addDishToCourse('appetizers','soup',3000);
myMenu.addDishToCourse('appetizers','wings',7000);


myMenu.addDishToCourse('mains','sandwich',10000);
myMenu.addDishToCourse('mains','pizza',25000);
myMenu.addDishToCourse('mains','lasagnia',30000);


myMenu.addDishToCourse('deserts','ice cream',2500);
myMenu.addDishToCourse('deserts','cake',5000);
myMenu.addDishToCourse('deserts','juice',5000);

console.log(myMenu.generateRandomMeal());
