import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppin-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  //ingridientAdded = new EventEmitter<{name:string, amount:number}>(); //Type Definition-

  constructor(private shoppingListService: ShoppingListService) {

  }

  ngOnInit(): void {

  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient: any = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIngredient);


  }

}
