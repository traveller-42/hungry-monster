function findFood(foodName) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        .then(res => res.json())
        .then(data => {
           const arrayOfFood = data.meals;
           arrayOfFood.forEach(meal => {
             showFood(meal);
           });
        })
        .catch(error=>alert('Not Available'))
}
const showFood = eachMeal=>{
    const foodSector = document.getElementById('food-sector');
    const foodDiv = document.createElement('div');
    foodDiv.className='food';
    const info =
        `<img onclick="display('${eachMeal.idMeal}')" class="food-img" src="${eachMeal.strMealThumb}" alt="">
        <h2 onclick="display('${eachMeal.idMeal}')" class="food-name">${eachMeal.strMeal}</h2>`
    foodDiv.innerHTML = info;
    foodSector.appendChild(foodDiv);
}
document.getElementById('SEARCH').addEventListener('click',function(){
    const food = document.getElementById('mealName').value;
    if (food==="") {
        alert('Invalid Input');
    } else {
        findFood(food);
    }
    document.getElementById('mealName').value = "";
    document.getElementById('food-sector').innerText = "";
    document.getElementById('ingredients').innerText = "";
})
const display = foodNameAgain => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodNameAgain}`)
        .then(res => res.json())
        .then(data => {
            const Array = data.meals;
            Array.forEach(idForEachFood => {
                ingredient(idForEachFood)
            });
        })
}
const ingredient = idIngredient => {
    const ingredients = document.getElementById('ingredients');
    ingredients.innerHTML = `<div class="ingredient">
            <img class="ingredient-img" src="${idIngredient.strMealThumb}" alt="">
            <h3 class="ingredient-name">${idIngredient.strMeal}</h3>
            <h5 class="IngredientID-title">Ingredient</h5>
            <ul>
                <li> ${idIngredient.strMeasure1}  ${idIngredient.strIngredient2}</li>
                <li> ${idIngredient.strMeasure2}  ${idIngredient.strIngredient3}</li>
                <li> ${idIngredient.strMeasure3}  ${idIngredient.strIngredient1}</li>
                <li> ${idIngredient.strMeasure4}  ${idIngredient.strIngredient4}</li>
                <li> ${idIngredient.strMeasure5}  ${idIngredient.strIngredient5}</li>
                <li> ${idIngredient.strMeasure6}  ${idIngredient.strIngredient6}</li>
                <li> ${idIngredient.strMeasure7}  ${idIngredient.strIngredient7}</li>
                <li> ${idIngredient.strMeasure8}  ${idIngredient.strIngredient8}</li>
                <li> ${idIngredient.strMeasure9}  ${idIngredient.strIngredient9}</li>
                <li> ${idIngredient.strMeasure10}  ${idIngredient.strIngredient10}</li>
                <li> ${idIngredient.strMeasure11}  ${idIngredient.strIngredient11}</li>
                <li> ${idIngredient.strMeasure12}  ${idIngredient.strIngredient12}</li>
                <li> ${idIngredient.strMeasure13}  ${idIngredient.strIngredient13}</li>
                <li> ${idIngredient.strMeasure14}  ${idIngredient.strIngredient14}</li>
                <li> ${idIngredient.strMeasure15}  ${idIngredient.strIngredient15}</li>
            </ul>
        </div>`
}