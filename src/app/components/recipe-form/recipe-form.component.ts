import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Recipe, RecipeCategory } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit {
  form!: FormGroup;
  isEditMode = false;
  recipeId: string | null = null;

  categories = Object.values(RecipeCategory);

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.recipeId;

    this.initForm();

    if (this.isEditMode && this.recipeId) {
      const recipe = this.recipeService.getById(this.recipeId);
      if (recipe) this.patchForm(recipe);
    }
  }

  initForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      imageUrl: [''], 
      category: [RecipeCategory.Breakfast, Validators.required],
      ingredients: this.fb.array([this.createIngredientGroup()]),
      steps: this.fb.array([this.fb.control('', Validators.required)]),
      isFavorite: [false],
    });
  }

  createIngredientGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      amount: [''],
    });
  }

  patchForm(recipe: Recipe): void {
    this.form.patchValue({
      name: recipe.name,
      imageUrl: recipe.imageUrl, 
      category: recipe.category,
      isFavorite: recipe.isFavorite,
    });

    this.form.setControl(
      'ingredients',
      this.fb.array(
        recipe.ingredients.map((ing) =>
          this.fb.group({
            name: [ing.name, Validators.required],
            amount: [ing.amount],
          })
        )
      )
    );

    this.form.setControl(
      'steps',
      this.fb.array(recipe.steps.map((s) => this.fb.control(s, Validators.required)))
    );
  }

  get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  get steps(): FormArray {
    return this.form.get('steps') as FormArray;
  }

  addIngredient(): void {
    this.ingredients.push(this.createIngredientGroup());
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  addStep(): void {
    this.steps.push(this.fb.control('', Validators.required));
  }

  removeStep(index: number): void {
    this.steps.removeAt(index);
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const recipe: Recipe = {
      id: this.isEditMode && this.recipeId ? this.recipeId : crypto.randomUUID(),
      ...this.form.value,
    };

    if (this.isEditMode) {
      this.recipeService.update(recipe);
    } else {
      this.recipeService.add(recipe);
    }

    this.router.navigate(['/recipes']);
  }

  onCancel(): void {
    this.router.navigate(['/recipes']);
  }
}