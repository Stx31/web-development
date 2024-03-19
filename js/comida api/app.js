function searchMeal() {
    var mealName = document.getElementById("mealInput").value;
    var apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if (data.meals && data.meals.length > 0) {
            var meal = data.meals[0];
            var mealName = meal.strMeal;
            var category = meal.strCategory;
            var area = meal.strArea;
            var instructions = meal.strInstructions;
            var thumbnail = meal.strMealThumb;

            var mealInfoDiv = document.getElementById("mealInfo");
            mealInfoDiv.innerHTML = `
                <h2>${mealName}</h2>
                <p><strong>Category:</strong> ${category}</p>
                <p><strong>Area:</strong> ${area}</p>
                <p><strong>Instructions:</strong> ${instructions}</p>
                <img src="${thumbnail}" alt="${mealName} Thumbnail">
            `;
        } else {
            document.getElementById("mealInfo").innerHTML = "No results found.";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("mealInfo").innerHTML = "An error occurred while fetching data.";
    });
}
