import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { FavouritesService } from 'src/app/favourites/services/favourites.service';
import { RecipePreview } from '../../models/recipe-preview.model';

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
    private auth: AngularFireAuth,
    private favouriteService: FavouritesService
  ) { }

  recipeData$!: Observable<{recipe: Recipe, similar: RecipePreview[]}>;
  authenticated = false;
  authSub = new Subscription;
  isFavourite = false;
  favouriteSub = new Subscription;

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
    this.recipeData$ = this.recipeService.getRecipeById(id);
    this.favouriteSub = this.favouriteService.favourites$.subscribe(favourites => {
      this.isFavourite = favourites.map(f => f.id).indexOf(id) !== -1;
    });
  }

  onAddFavourite(recipe: Recipe) {
    const limitedRecipe = new RecipePreview(recipe.id, recipe.name, recipe.imgURL);
    this.favouriteService.storeFavourites(limitedRecipe);
  }

  onRemoveFavourite(recipe: Recipe) {
    const limitedRecipe = new RecipePreview(recipe.id, recipe.name, recipe.imgURL);
    this.favouriteService.removeFavourite(limitedRecipe);
  }

  onBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
    this.favouriteSub.unsubscribe();
  }

}
