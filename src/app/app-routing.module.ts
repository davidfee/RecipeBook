import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/components/login/login.component";
import { RegisterComponent } from "./auth/components/register/register.component";
import { AuthGuardService } from "./auth/services/auth-guard.service";
import { FavouritesComponent } from "./favourites/components/favourites/favourites.component";
import { CategorySelectComponent } from "./recipe/components/category-select/category-select.component";
import { RecipeByCategoryComponent } from "./recipe/components/recipe-by-category/recipe-by-category.component";
import { RecipeDetailsComponent } from "./recipe/components/recipe-details/recipe-details.component";
import { RecipeSearchComponent } from "./recipe/components/recipe-search/recipe-search.component";
import { SearchResultsComponent } from "./recipe/components/search-results/search-results.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";

const routes: Routes = [
    {path: '', component: RecipeSearchComponent, children: [
        {path: 'search/:title', component: SearchResultsComponent},
        {path: 'search/:title/:id', component: RecipeDetailsComponent}
    ]},
    {path: 'category', component: CategorySelectComponent, children: [
        {path: ':category', component: RecipeByCategoryComponent},
        {path: ':category/:id', component: RecipeDetailsComponent}
    ]},
    {path: 'favourites', component: FavouritesComponent, canActivate: [AuthGuardService]},
    {path: 'favourites/:id', component: RecipeDetailsComponent, canActivate: [AuthGuardService]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}