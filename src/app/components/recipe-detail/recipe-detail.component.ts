import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipeService, Recipe } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  imports: [CommonModule]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | undefined;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipe = data.find((r) => r.id === id);
    });
  }
}
