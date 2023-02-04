import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavouritesComponent } from "./favourites/components/favourites/favourites.component";
import { CategorySelectComponent } from "./recipe/components/category-select/category-select.component";
import { RecipeSearchComponent } from "./recipe/components/recipe-search/recipe-search.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";

const routes: Routes = [
    {path: '', component: RecipeSearchComponent},
    {path: 'category', component: CategorySelectComponent},
    {path: 'favourites', component: FavouritesComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}