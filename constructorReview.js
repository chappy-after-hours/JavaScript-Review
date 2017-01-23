//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
function Animal (species,name,legs,color,foodArr){
  this.species = species,
  this.name = name,
  this.legs = legs,
  this.color = color,
  this.food = foodArr
}


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
function person(name1,age1,height1,gender1) {
  return {
    name:name1,
    age:age1,
    height:height1,
    gender:gender1
  }
}

//Create a animal array and a person array.

  //code here
var animalArr = [];
var personArr = [];

//Create two instances of Animal and push those into your animal array

  //code here
var giraffe = new Animal("beast","giraffe",4,"yellow",["meat","cheese"]);
var kangaroo = new Animal("beast","kangaroo",5,"brown",["grasshoppers","bananas"])
animalArr.push(giraffe,kangaroo);

//Create two instances of person and push those into your person array.

  //code here

personArr.push(person("Jeff",30,"6foot 2","male"),
person("Marie",29,"5 foot 7","female"));

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
Animal.prototype.eat = function(){
  var randomItem = this.food[Math.floor(Math.random()*this.food.length)];
  alert(this.name +" ate " + randomItem)
}

//At this point, if we wanted to add something to every istance of person could we?

  //Yes or no? and why or why not?
//NO because there is no person Object.


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  It creates a new instance of the contructor object.

  2) What's a good way to describe the keyword 'this'
  this refers to the object that instanciates the function.

  3) Can a normal function which creates an object and then returns that object use the prototype?
  no

  4) What happens if you forget to use 'new' when calling a constructor?
  returns undefined

*/
