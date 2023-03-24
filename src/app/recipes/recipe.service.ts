
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppin-list.service';
import { Recipe } from "./recipe.model";



@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Spaghetti bolognese',
      'Our best ever spaghetti bolognese is super easy and a true Italian classic with a meaty, chilli sauce',
      '/assets/img/spaghetti_bolognese.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Pasta', 20)

      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2)

      ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }


  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
