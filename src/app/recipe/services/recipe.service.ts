import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Category } from '../models/category.model';
import { RecipePreview } from '../models/recipe-preview.model';

interface recipeAPIResponse {
  meals: {
    idMeal: string,
    strMeal: string,
    strMealThumb: string
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
