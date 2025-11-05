export enum RecipeCategory {
  Breakfast = 'Breakfast',
  Lunch = 'Lunch',
  Dinner = 'Dinner',
  Desserts = 'Desserts',
}

export interface Ingredient {
  name: string;
  amount?: string;
}

export interface Recipe {
  id: string;
  name: string;
  category: RecipeCategory;
  ingredients: Ingredient[];
  steps: string[];
  isFavorite?: boolean;
  imageUrl?: string;
}
