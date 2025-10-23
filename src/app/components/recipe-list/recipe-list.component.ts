import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { RecipeService, Recipe } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  imports: [CommonModule, RouterModule] 
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data;
    });
  }
}
