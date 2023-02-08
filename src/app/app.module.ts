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
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from './auth/models/firebase.model';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RecipeModule } from './recipe/recipe.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule, // SPECIAL CASES (ONCE IN APP MODULE)
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule,
    BrowserAnimationsModule, // SPECIAL CASE (NEXT TO BROWSER MODULE)
    LayoutModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatListModule, 
    MatSnackBarModule,
    RecipeModule,
    SharedModule,
    // FavouritesModule, - lazily loaded
    // AuthModule, - loaded lazily
    AppRoutingModule // LEAVE LAST
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
