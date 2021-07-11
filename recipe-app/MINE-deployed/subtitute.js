const mealContainer = document.getElementById('meal');
const likeBtn = document.querySelector('.fav-btn');
getRandomMeal();

async function getRandomMeal() {
    const RandomURL = await (await fetch("https://www.themealdb.com/api/json/v1/1/random.php")).json();

    const randomMeal = RandomURL.meals[0]

    addMeal(randomMeal)


}

async function getMealbyId(id) {
    const IdURL = await fetch(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
    );
}

async function getMealbySearch(name) {
    const SearchURL = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + term
    );
}

function addMeal(mealData, bool = false) {
    mealContainer.innerHTML = ` <div class="mealheader">
    ${
        bool
            ? `
    <span>${mealData.strMeal}</span>`
            : ""
    }
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
console.log(mealContainer.innerHTML);