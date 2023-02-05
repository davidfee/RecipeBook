import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit{

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private location: Location) { }

  recipe$!: Observable<Recipe>;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.fetchRecipe(id!);
    })
  }

  fetchRecipe(id: string) {
    this.recipe$ = this.recipeService.getRecipeById(id);
  }

  onBack() {
    this.location.back();
  }

}
