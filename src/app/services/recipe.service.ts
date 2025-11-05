import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Recipe, RecipeCategory } from '../models/recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private readonly STORAGE_KEY = 'recipes';
  private readonly _recipes$ = new BehaviorSubject<Recipe[]>(this.load());

  public readonly recipes$: Observable<Recipe[]> = this._recipes$.asObservable();

  private get snapshot(): Recipe[] {
    return this._recipes$.value;
  }

  getAll(): Recipe[] {
    return this.snapshot;
  }

  getById(id: string): Recipe | undefined {
    return this.snapshot.find((r) => r.id === id);
  }

  add(recipe: Recipe): void {
    const next = [...this.snapshot, recipe];
    this.persist(next);
  }

  update(updated: Recipe): void {
    const next = this.snapshot.map((r) => (r.id === updated.id ? updated : r));
    this.persist(next);
  }

  delete(id: string): void {
    const next = this.snapshot.filter((r) => r.id !== id);
    this.persist(next);
  }

  toggleFavorite(id: string): void {
    const next = this.snapshot.map((r) => (r.id === id ? { ...r, isFavorite: !r.isFavorite } : r));
    this.persist(next);
  }

  private load(): Recipe[] {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    if (raw) {
      try {
        return JSON.parse(raw) as Recipe[];
      } catch {}
    }
    const seed = this.seedData();
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(seed));
    return seed;
  }

  private persist(next: Recipe[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(next));
    this._recipes$.next(next);
  }

  private seedData(): Recipe[] {
    return [
      {
        id: 'r-1',
        name: 'Омлет із сиром і зеленню',
        category: RecipeCategory.Breakfast,
        ingredients: [
          { name: 'Яйця', amount: '3 шт' },
          { name: 'Сир твердий', amount: '50 г' },
          { name: 'Молоко', amount: '2 ст. л.' },
          { name: 'Зелень (кріп/петрушка)', amount: 'за смаком' },
          { name: 'Сіль, перець', amount: 'за смаком' },
          { name: 'Олія', amount: '1 ст. л.' },
        ],
        steps: [
          'Збити яйця з молоком, додати сіль і перець.',
          'Додати натертий сир і подрібнену зелень.',
          'Розігріти сковорідку з олією та вилити суміш.',
          'Готувати під кришкою 3–5 хв до готовності.',
        ],
        isFavorite: false,
      },
      {
        id: 'r-2',
        name: 'Куряче філе з овочами',
        category: RecipeCategory.Lunch,
        ingredients: [
          { name: 'Куряче філе', amount: '400 г' },
          { name: 'Болгарський перець', amount: '1 шт' },
          { name: 'Цибуля', amount: '1 шт' },
          { name: 'Морква', amount: '1 шт' },
          { name: 'Соєвий соус', amount: '2 ст. л.' },
          { name: 'Олія', amount: '1-2 ст. л.' },
          { name: 'Сіль, перець', amount: 'за смаком' },
        ],
        steps: [
          'Нарізати філе смужками, обсмажити до рум’яності.',
          'Додати нарізані овочі, смажити 5–7 хв.',
          'Додати соєвий соус, перемішати, тушкувати 2–3 хв.',
          'Подавати з рисом або гречкою.',
        ],
        isFavorite: true,
      },
      {
        id: 'r-3',
        name: 'Паста з томатним соусом',
        category: RecipeCategory.Dinner,
        ingredients: [
          { name: 'Паста (спагеті)', amount: '250 г' },
          { name: 'Томати у власному соку', amount: '300 г' },
          { name: 'Часник', amount: '2 зубчики' },
          { name: 'Оливкова олія', amount: '1 ст. л.' },
          { name: 'Сіль, перець', amount: 'за смаком' },
          { name: 'Базилік/орегано', amount: 'за смаком' },
        ],
        steps: [
          'Відварити пасту al dente.',
          'На олії обсмажити часник 30 сек, додати томати і спеції.',
          'Тушкувати соус 7–10 хв, змішати з пастою.',
          'Подавати з зеленню або пармезаном.',
        ],
        isFavorite: false,
      },
      {
        id: 'r-4',
        name: 'Шоколадний брауні',
        category: RecipeCategory.Desserts,
        ingredients: [
          { name: 'Темний шоколад', amount: '200 г' },
          { name: 'Вершкове масло', amount: '120 г' },
          { name: 'Цукор', amount: '150 г' },
          { name: 'Яйця', amount: '3 шт' },
          { name: 'Борошно', amount: '100 г' },
          { name: 'Какао', amount: '1 ст. л.' },
          { name: 'Сіль', amount: 'дрібка' },
        ],
        steps: [
          'Розтопити шоколад з маслом на водяній бані.',
          'Додати цукор, яйця, перемішати.',
          'Вмішати борошно, какао і сіль.',
          'Випікати 20–25 хв при 180°C.',
        ],
        isFavorite: false,
      },
    ];
  }
}
