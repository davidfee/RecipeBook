import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { RouterModule, Routes } from '@angular/router';
import { RecipeModule } from '../recipe/recipe.module';
import { RecipeDetailsComponent } from '../recipe/components/recipe-details/recipe-details.component';
import { AuthGuardService } from '../auth/services/auth-guard.service';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {path: '', component: FavouritesComponent, canActivate: [AuthGuardService]},
  {path: ':id', component: RecipeDetailsComponent, canActivate: [AuthGuardService]},
]

@NgModule({
  declarations: [FavouritesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RecipeModule,
    SharedModule
  ]
})
export class FavouritesModule { }
