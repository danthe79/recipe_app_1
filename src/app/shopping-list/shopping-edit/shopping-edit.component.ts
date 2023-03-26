import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppin-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  //@ViewChild('nameInput') nameInputRef!: ElementRef;
  // @ViewChild('amountInput') amountInputRef!: ElementRef;
  //ingridientAdded = new EventEmitter<{name:string, amount:number}>(); //Type Definition-
  @ViewChild('form') ShoppingListForm!: NgForm
  subscription!: Subscription;
  editMode = false;
  editedItemIndex!: number;
  editedItem!: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {

  }


  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredients(index);
        this.ShoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      });

  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient: any = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateInfgredient(this.editedItemIndex, newIngredient)
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();


  }

  onClear() {
    this.ShoppingListForm.reset();
    this.editMode = false;


  }
  onDelete() {
    this.shoppingListService.deleteIngredients(this.editedItemIndex);
    this.onClear()

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
