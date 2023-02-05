import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Category } from '../models/category.model';
import { RecipePreview } from '../models/recipe-preview.model';
import { Ingredient, Recipe } from '../models/recipe.model';

interface recipeAPIResponse {
  meals: {
    idMeal: string,
    strMeal: string,
    strMealThumb: string,
    strCategory: string,
    strArea: string,
    strSource: string,
    strTags: string,
    strYoutube: string,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strIngredient7: string,
    strIngredient8: string,
    strIngredient9: string,
    strIngredient10: string,
    strIngredient11: string,
    strIngredient12: string,
    strIngredient13: string,
    strIngredient14: string,
    strIngredient15: string,
    strIngredient16: string,
    strIngredient17: string,
    strIngredient18: string,
    strIngredient19: string,
    strIngredient20: string,
    strMeasure1: string,
    strMeasure2: string,
    strMeasure3: string,
    strMeasure4: string,
    strMeasure5: string,
    strMeasure6: string,
    strMeasure7: string,
    strMeasure8: string,
    strMeasure9: string,
    strMeasure10: string,
    strMeasure11: string,
    strMeasure12: string,
    strMeasure13: string,
    strMeasure14: string,
    strMeasure15: string,
    strMeasure16: string,
    strMeasure17: string,
    strMeasure18: string,
    strMeasure19: string,
    strMeasure20: string,
    strInstructions: string
  } []
};

interface categoryAPIResponse {
  categories: {
    idCategory: string,
    strCategory: string,
    strCategoryThumb: string,
    strCategoryDescription: string
  } []
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipesByTitle(title: string) {
    return this.http.get<recipeAPIResponse>('https://www.themealdb.com/api/json/v1/1/search.php', {
      params: {
        s: title
      }
    })
    .pipe(
      map((response) => {
        if(!response.meals) {
          return [];
        }
        return response.meals.map(meal => {
          return new RecipePreview(meal.idMeal, meal.strMeal, meal.strMealThumb);
        });
      })
    )
  }

  getRecipesByCategory(category: string) {
    return this.http.get<recipeAPIResponse>('https://www.themealdb.com/api/json/v1/1/filter.php', {
      params: {
        c: category
      }
    }).pipe(
      map((response: any) => {
        if(!response.meals){
          return [];
        }
        return response.meals.map((meal: any) => {
          return new RecipePreview(meal.idMeal, meal.strMeal, meal.strMealThumb);
        });
      })
    )
  }

  getRecipeById(id: string) {
    return this.http.get<recipeAPIResponse>('https://www.themealdb.com/api/json/v1/1/lookup.php', {
      params: {
        i: id
      }
    })
    .pipe(
      map((response) => {
        let stepsArray: string[] = response.meals[0].strInstructions.split("\r\n");
        let tags: string[] = response.meals[0].strTags ? response.meals[0].strTags.split(",") : [];

        // Pull out ingredients from mess of strings
        let ingredients: Ingredient[] = [];
        let unformedRecipe: any = response.meals[0];
        for(let i = 1; i < 21; i++) {
          let ingAccessor = "strIngredient" + i;
          let qtyAccessor = "strMeasure" + i;
          if(unformedRecipe[ingAccessor] == "" || unformedRecipe[ingAccessor] === null) {
            break;
          }
          ingredients.push(new Ingredient(unformedRecipe[ingAccessor], unformedRecipe[qtyAccessor]));
        }

        return new Recipe(
          unformedRecipe.idMeal,
          unformedRecipe.strMeal,
          unformedRecipe.strMealThumb,
          unformedRecipe.strCategory,
          unformedRecipe.strArea,
          unformedRecipe.strSource,
          tags,
          unformedRecipe.strYoutube,
          ingredients,
          stepsArray
        );
      })
    )
  }

  getAllCategories() {
    return this.http.get<categoryAPIResponse>('https://www.themealdb.com/api/json/v1/1/categories.php').pipe(
      map((response) => {
        return response.categories.map((category) => {
          return new Category(category.idCategory, category.strCategory, category.strCategoryThumb);
        });
      })
    )
  }

}
