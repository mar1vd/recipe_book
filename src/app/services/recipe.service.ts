import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Recipe {
  id: number;
  title: string;
  category: string;
  ingredients: string[];
  steps: string[];
  favorite: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private dataUrl = 'recipes.json'; // шлях до public/recipes.json

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.dataUrl);
  }
}
