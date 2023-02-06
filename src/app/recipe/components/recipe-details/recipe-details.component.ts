import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location,
    private auth: AngularFireAuth
  ) { }

  recipe$!: Observable<Recipe>;
  authenticated = false;
  authSub = new Subscription;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.fetchRecipe(id!);
    });
    this.authSub = this.auth.authState.subscribe(user => {
      this.authenticated = user ? true : false;
    });
  }

  fetchRecipe(id: string) {
    this.recipe$ = this.recipeService.getRecipeById(id);
  }

  onBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }

}
