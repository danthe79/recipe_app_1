import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppin-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  //@ViewChild('nameInput') nameInputRef!: ElementRef;
  // @ViewChild('amountInput') amountInputRef!: ElementRef;
  //ingridientAdded = new EventEmitter<{name:string, amount:number}>(); //Type Definition-

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit(): void {

  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient: any = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngredient);


  }

}
