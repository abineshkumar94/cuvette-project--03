function readfooddata() {
  const fs = require('fs');
  const data = fs.readFileSync('food.json');
  return JSON.parse(data);
}


function listallfooditems() {
  const fooddata = readfooddata();
  const fooditeams =fooddata.map((food) => food.foodname);
  console.log('all food iteams:', fooditeams);
  return fooditeams;
}


function listfooditeamsbycataegory(category) {
  const fooddata = readfooddata();
  const fooditeams = fooddata.filter((food) => food.category === category)
  .map((food) => food.foodname);
  console.log(`food items with category '${category}':`, fooditems);
  return fooditeams;
}


function listfooditeamabovecalorie(calorie) {
const fooddata = readfooddata();
const fooditeam = fooddata.filter((food) => food.calorie > calorie)
.map((food) => food.foofname);
console.log(`food items with calorie above ${calorie}:`, fooditems);
return foodItems;
}


function listfooditeamsbelowcalorie(calorie) {
  const fooddata = readfooddata();
  const fooditems = fooddata.filter((food) => food.calorie < calorie)
  .map((food) => food.foodname);
  console.log(`food items with calorie below ${calorie}:`, fooditems);
  return fooditems;
}


function listfooditeamsbyhighestprotein() {
  const fooddata = readfooddata();
  const fooditeam = fooddata.sort((a,b) => b.protiens - a.protiens)
  .map((food) => food.foodname);
  console.log('food items with highest protein content to lowest:', fooditems);
}


function listfooditeamsbylowestcard() {
  const fooddata = readfooddata();
  const fooditeams = fooddata.sort((a,b) => a.carb - b.carb)
  .map((food) => food.foodname);
  console.log('food items with lowest carb content to highest:', fooditems);
  return fooditeams;
}
