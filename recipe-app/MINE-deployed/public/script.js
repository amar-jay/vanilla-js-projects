var mealContainer = document.querySelector('.meal');
var mealSearched = document.querySelector('input');
var searchBtn = document.getElementById('search');
var favContainer = document.getElementById('fav-container');


getRandomMeal();
async function getRandomMeal(){
    const RandomURL = await (await fetch("https://www.themealdb.com/api/json/v1/1/random.php")).json();
    const mealData = RandomURL.meals[0];
    displayMeal(mealData)
    
}
async function getMealbySearch(name){
    const SearchURL = await (await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + name)).json();
    if (SearchURL.meals == null) {
        mealContainer.innerHTML =
        `<div class=mealbody>
                <h4> There is no such meal as '${mealSearched.value}' </h4>
        </div>`;
    }
    else{
        displayMeal(SearchURL.meals[0]);}
}

SearchBtn.addEventListener("click", () => {
    getMealbySearch(mealSearched.value);
})

addEventListener("keydown", (e) => {
    if (e.code === 13) {
        getMealbySearch(mealSearched.value);
    }
})





function displayMeal(mealData){
    mealContainer.innerHTML = ` <div class="mealheader">
    <span>${mealData.strMeal}</span>
    <img
        src="${mealData.strMealThumb}"
        alt="${mealData.strMeal}"
    />
</div>
<div class="mealbody">
    <h4>${mealData.strMeal}</h4>
    <button class="fav-btn">
        <i class="fas fa-heart" id="likeBtn"></i>
    </button>
</div>
`;
}

function addMealFav(mealData) {
    const favMeal = document.createElement("li");

    favMeal.innerHTML = `
        <img
            src="${mealData.strMealThumb}"
            alt="${mealData.strMeal}"
        /><span>${mealData.strMeal}</span>
        <button class="clear"><i class="fas fa-window-close"></i></button>
    `;


    favContainer.appendChild(favMeal);
}

searchBtn.addEventListener("click", () => {
   searchBtn.classList.add("hidden");
})



