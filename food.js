const searchBtn=document.getElementById('search-btn');
const mealList=document.getElementById('meal');
const mealDetailsContent=document.querySelector('meal-details-content');


searchBtn.addEventListener('click',getMealList);
mealList.addEventListener('click',getMealRecipe);


function getMealList(){
    let searchInputTxt=document.getElementById('search-input').value.trim();
    // console.log(searchInputTxt.length);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response=> response.json())
    .then(data=>{
        let html="";
        if(data.meals){
            data.meals.forEach(meal =>{
                html+=`
                    <div class="meal-item" data-id="${meal.idMeal}">
                      <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="food">
                    </div>
                    <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href="https://www.indianhealthyrecipes.com/recipes/" class="recipe-btn">GET RECIPE</a>
                    </div>
                </div>
            `;

            });
        } else{
            html="Sorry, There is No Match !";
            mealList.classList.add('notFound');
        }
        mealList.innerHTML=html;
    });


}


