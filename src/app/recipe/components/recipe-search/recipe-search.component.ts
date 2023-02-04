import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipePreview } from '../../models/recipe-preview.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent {

  constructor(private recipeService: RecipeService) { }

  recipes: RecipePreview[] = [];
  loading = false;

  searchForm: FormGroup = new FormGroup({
    title: new FormControl("", Validators.required)
  });

  onSubmit() {
    this.loading = true;
    let value = this.searchForm.controls['title'].value;
    this.recipeService.getRecipesByTitle(value).subscribe(recipes => {
      this.recipes = recipes;
      this.loading = false;
    });
  }

}
