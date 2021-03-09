import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientSearchResultComponent } from './components/ingredient-search-result/ingredient-search-result.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';


const routes: Routes = [
  { path: '', component: SearchComponentComponent},
  { path: 'result/:ingredients', component: IngredientSearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
