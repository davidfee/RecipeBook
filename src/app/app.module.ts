import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RecipeSearchComponent } from './recipe/components/recipe-search/recipe-search.component';
import { CategorySelectComponent } from './recipe/components/category-select/category-select.component';
import { FavouritesComponent } from './favourites/components/favourites/favourites.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeListComponent } from './recipe/components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/components/recipe-item/recipe-item.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { SearchResultsComponent } from './recipe/components/search-results/search-results.component';
import { RecipeDetailsComponent } from './recipe/components/recipe-details/recipe-details.component';
import {MatChipsModule} from '@angular/material/chips';
import { RecipeByCategoryComponent } from './recipe/components/recipe-by-category/recipe-by-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RecipeSearchComponent,
    CategorySelectComponent,
    FavouritesComponent,
    NotFoundComponent,
    RecipeListComponent,
    RecipeItemComponent,
    LoadingSpinnerComponent,
    SearchResultsComponent,
    RecipeDetailsComponent,
    RecipeByCategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
