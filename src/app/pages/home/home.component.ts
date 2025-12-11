import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredRecipe: Recipe | undefined;
  totalRecipes = 0;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    const recipes = this.recipeService.getAll();
    this.totalRecipes = recipes.length;

    if (recipes.length > 0) {
      const randomIndex = Math.floor(Math.random() * recipes.length);
      this.featuredRecipe = recipes[randomIndex];
    }
  }
}