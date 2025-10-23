import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/:id', component: RecipeDetailComponent },
  { path: 'add', component: RecipeFormComponent },
  { path: '**', redirectTo: '' }
];

