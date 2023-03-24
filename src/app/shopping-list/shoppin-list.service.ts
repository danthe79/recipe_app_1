
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";


export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>;
  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 8),
    new Ingredient('Pasta', 2),
  ];

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    //for(let ingredient of ingredients){
    // this.addIngredients(ingredients);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
