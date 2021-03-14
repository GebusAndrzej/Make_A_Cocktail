import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedSearchResultComponent } from './components/advanced-search-result/advanced-search-result.component';
import { DrinkInfoComponent } from './components/drink-info/drink-info.component';
import { IngredientSearchResultComponent } from './components/ingredient-search-result/ingredient-search-result.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';


const routes: Routes = [
  { path: '', component: SearchComponentComponent},
  { path: 'result/:name/:alcoholic/:types', component: AdvancedSearchResultComponent},
  { path: 'result/:ingredients', component: IngredientSearchResultComponent},
  { path: 'drink/:id', component: DrinkInfoComponent},
  { path: '**', component: SearchComponentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
