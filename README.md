<div align="center">

  <h1>🍳 Recipe Book / Книга Рецептів</h1>

  <p>
    <strong>A modern Angular Single Page Application (SPA) for managing culinary masterpieces.</strong><br>
    Сучасний SPA-додаток на Angular для керування кулінарними шедеврами.
  </p>

  <p>
    <a href="https://angular.io/">
      <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
    </a>
    <a href="https://www.typescriptlang.org/">
      <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    </a>
    <a href="https://rxjs.dev/">
      <img src="https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white" alt="RxJS" />
    </a>
  </p>

  <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=1200&q=80" alt="Recipe Book Banner" width="100%" style="border-radius: 10px;" />

</div>

---

## 🎯 Purpose / Мета

### 🇬🇧 English
**Recipe Book** is a dynamic web application designed to help users organize their cooking routine. It allows you to create, edit, store, and view recipes with a focus on a smooth user experience using the latest Angular features.

### 🇺🇦 Українська
**Книга Рецептів** — це динамічний веб-додаток, створений для організації кулінарної рутини. Він дозволяє створювати, редагувати, зберігати та переглядати рецепти, фокусуючись на зручності користувача з використанням сучасних можливостей Angular.

---

## ✨ Key Features / Ключові можливості

| Feature | Description (EN) | Опис (UA) |
| :--- | :--- | :--- |
| **🔍 Smart Search** | Instant filtering by name and category using RxJS. | Миттєвий пошук за назвою та категорією через RxJS. |
| **⚡ CRUD Operations** | Full Create, Read, Update, Delete functionality. | Повний цикл створення, перегляду, редагування та видалення. |
| **🎨 Modern UI/UX** | Responsive design with stagger animations. | Адаптивний дизайн із каскадними анімаціями. |
| **❤️ Favorites** | Mark your best dishes to find them quickly. | Позначайте найкращі страви, щоб швидко їх знайти. |
| **💾 Persistence** | Data is saved in LocalStorage (no data loss on refresh). | Дані зберігаються в LocalStorage (не зникають при оновленні). |
| **🎲 Recipe of the Day** | Random recipe suggestion on the Home page. | Випадкова пропозиція рецепту на головній сторінці. |
| **🛡️ Validation** | robust form validation to prevent empty data. | Надійна валідація форм для запобігання пустим даним. |
| **🚫 404 Page** | Custom "Page Not Found" with a culinary theme. | Кастомна сторінка помилки 404 у кулінарному стилі. |

---

## 📸 Screenshots / Скріншоти

| Home Page | Recipe List |
| :---: | :---: |
| <img src="https://placehold.co/600x400?text=Home+Page+Screenshot" alt="Home Page" width="100%"> | <img src="https://placehold.co/600x400?text=Recipe+List+Screenshot" alt="Recipe List" width="100%"> |

| Recipe Details | Edit Form |
| :---: | :---: |
| <img src="https://placehold.co/600x400?text=Details+Screenshot" alt="Details" width="100%"> | <img src="https://placehold.co/600x400?text=Form+Screenshot" alt="Form" width="100%"> |

---

## 🛠️ Tech Stack / Технології

* **Framework:** Angular (v17+)
* **Language:** TypeScript
* **State Management:** RxJS (`BehaviorSubject`, `Observables`)
* **Styling:** CSS3 (Flexbox, Grid, Transitions)
* **Animations:** `@angular/animations`
* **Forms:** Reactive Forms

---

## 🗂️ Project Structure / Структура проєкту

The project follows a modular architecture for scalability.
Проєкт дотримується модульної архітектури для масштабування.

```text
recipe_book/
├─ .angular/                  # Internal Angular CLI cache/config
├─ .editorconfig              # Editor formatting rules
├─ .git/                      # Git metadata
├─ .gitignore                 # Git ignore rules
├─ .vscode/                   # VS Code workspace settings
├─ angular.json               # Angular CLI project configuration
├─ package.json               # Dependencies and scripts
├─ package-lock.json          # Locked dependency tree
├─ tsconfig.json              # TypeScript base config
├─ tsconfig.app.json          # TS config for app sources
├─ tsconfig.spec.json         # TS config for tests
├─ README.md                  # Project documentation
│
├─ public/                    # Static assets copied on build
│  ├─ favicon.ico
│  └─ recipes.json            # Public recipes dataset
│
├─ assets/                    # Runtime/static assets
│  └─ recipes.json            # Recipes dataset bundled with app
│
└─ src/
   ├─ index.html              # Root HTML
   ├─ main.ts                 # Application bootstrap
   ├─ styles.css              # Global styles
   │
   └─ app/
       ├─ app.ts              # Root component class
       ├─ app.component.html  # Root template
       ├─ app.component.css   # Root styles
       ├─ app.config.ts       # Application configuration/providers
       ├─ app.routes.ts       # Route definitions
       ├─ app.spec.ts         # Root component tests
       │
       ├─ components/         # Reusable feature components
       │  ├─ recipe-list/
       │  │  ├─ recipe-list.component.ts
       │  │  ├─ recipe-list.component.html
       │  │  ├─ recipe-list.component.css
       │  │  └─ recipe-list.spec.ts
       │  │
       │  ├─ recipe-detail/
       │  │  ├─ recipe-detail.component.ts
       │  │  ├─ recipe-detail.component.html
       │  │  ├─ recipe-detail.component.css
       │  │  └─ recipe-detail.spec.ts
       │  │
       │  └─ recipe-form/
       │     ├─ recipe-form.component.ts
       │     ├─ recipe-form.component.html
       │     ├─ recipe-form.component.css
       │     └─ recipe-form.spec.ts
       │
       ├─ pages/              # Routed pages/views
       │  ├─ home/
       │  │  ├─ home.component.ts
       │  │  ├─ home.component.html
       │  │  ├─ home.component.css
       │  │  └─ home.spec.ts
       │  │
       │  └─ page-not-found/
       │     ├─ page-not-found.component.ts
       │     ├─ page-not-found.component.html
       │     └─ page-not-found.component.css
       │
       ├─ models/             # TypeScript data models
       │  └─ recipe.model.ts
       │
       └─ services/           # Injectable services
          ├─ recipe.service.ts
          └─ recipe.spec.ts
---

## 🚀 Getting Started / Як запустити

Follow these steps to set up the project locally.
Виконайте ці кроки для локального запуску проєкту.

### 1. Clone the repository / Склонуйте репозиторій:
```bash
git clone [https://github.com/mar1vd/recipe_book.git](https://github.com/mar1vd/recipe_book.git)

###2. Install dependencies / Встановіть залежності:Bashnpm install
###3. Run the application / Запустіть додаток:Bashnpm start
###4. Open in browser / Відкрийте у браузері:Navigate to / Перейдіть за посиланням:Plaintexthttp://localhost:4200/
👨‍💻 Authors / АвториProject created as part of the Front-End Web Programming (Angular) course.Проєкт створено в межах дисципліни "Веб-програмування Front-End (Angular)".<div align="center">Ivan TymchukDenys MorysImplementation & UI/UXArchitecture & LogicGitHub ProfileGitHub Profile</div><div align="center"><sub>Built with ❤️ and lots of coffee ☕</sub></div>
```
