import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipe = this.recipeService.getById(id);
    }
  }

  onBack(): void {
    this.router.navigate(['/recipes']);
  }

  onEdit(): void {
    if (this.recipe) {
      this.router.navigate(['/edit', this.recipe.id]);
    }
  }

  onDelete(): void {
    if (this.recipe && confirm('Are you sure you want to delete this recipe?')) {
      this.recipeService.delete(this.recipe.id);
      this.router.navigate(['/recipes']);
    }
  }
}