import { TextDeleteComponent } from './components-crud/text/text-delete/text-delete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import './views/home/home.component';
import './views/crud-texts/crud-texts.component';
import { HomeComponent } from './views/home/home.component';
import { CrudTextsComponent } from './views/crud-texts/crud-texts.component';
import { TextCreateComponent } from './components-crud/text/text-create/text-create.component';
import { TextUpdateComponent } from './components-crud/text/text-update/text-update.component';



const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "texts", component: CrudTextsComponent},
  {path: "texts/create", component: TextCreateComponent},
  {path: "texts/update/:id", component: TextUpdateComponent},
  {path: "texts/delete/:id", component: TextDeleteComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
