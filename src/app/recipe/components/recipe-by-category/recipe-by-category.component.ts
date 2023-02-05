import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipePreview } from '../../models/recipe-preview.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-by-category',
  templateUrl: './recipe-by-category.component.html',
  styleUrls: ['./recipe-by-category.component.scss']
})
export class RecipeByCategoryComponent implements OnInit {

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  loading = true;
  recipes: RecipePreview[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.loading = true;
      const category = params.get('category');
      this.fetchRecipes(category!);      
    });
  }

  fetchRecipes(category: string) {
    this.recipeService.getRecipesByCategory(category).subscribe(response => {
      this.recipes = response;
      this.loading = false;
    });
  }

}
