import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import './views/home/home.component';
import './views/crud-texts/crud-texts.component';
import { HomeComponent } from './views/home/home.component';
import { CrudTextsComponent } from './views/crud-texts/crud-texts.component';
import { TextCreateComponent } from './components-crud/text/text-create/text-create.component';



const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "texts", component: CrudTextsComponent},
  {path: "texts/create", component: TextCreateComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
