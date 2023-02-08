import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";

const routes: Routes = [
    // CHILD ROUTES INJECTED
    {path: '', redirectTo: 'search', pathMatch: 'full'},
    {path: 'favourites', loadChildren: () => import('./favourites/favourites.module').then(m => m.FavouritesModule) },
    {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}