import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Recipe, RecipeCategory } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  filtered: Recipe[] = [];

  search$ = new BehaviorSubject<string>('');
  category$ = new BehaviorSubject<RecipeCategory | 'All'>('All');

  categories = Object.values(RecipeCategory);
  searchValue = '';
  selectedCategory: RecipeCategory | 'All' = 'All';

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getAll();
    this.setupFiltering();
  }

  setupFiltering(): void {
    combineLatest([this.search$, this.category$])
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map(([search, category]) => {
          search = search.toLowerCase().trim();

          return this.recipes.filter((r) => {
            const matchesSearch = r.name.toLowerCase().includes(search);
            const matchesCategory = category === 'All' ? true : r.category === category;
            return matchesSearch && matchesCategory;
          });
        })
      )
      .subscribe((filtered) => (this.filtered = filtered));
  }

  onSearchChange(value: string): void {
    this.searchValue = value;
    this.search$.next(value);
  }

  onCategoryChange(value: string): void {
    this.selectedCategory = value as RecipeCategory | 'All';
    this.category$.next(this.selectedCategory);
  }

  onToggleFavorite(id: string): void {
    this.recipeService.toggleFavorite(id);
    this.recipes = this.recipeService.getAll();
    this.search$.next(this.searchValue);
  }

  onDelete(id: string): void {

    if (confirm('Are you sure you want to delete this recipe?')) {
        this.recipeService.delete(id);
        this.recipes = this.recipeService.getAll();
        this.search$.next(this.searchValue);
    }
  }
}