import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';




import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeService } from './recipes/recipe.service';
import { RecipesComponent } from './recipes/recipes.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shoppin-list.service';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule



  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
