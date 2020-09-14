import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './awesome/list/list.component';
import {EditComponent} from './awesome/edit/edit.component';
import {AddComponent} from './awesome/add/add.component';
import {ShowComponent} from './awesome/show/show.component';

const routes: Routes = [
  {path: '', redirectTo: 'awesome', pathMatch: 'full'},
  {path: 'awesome', component: ListComponent},
  {path: 'awesome/create', component: AddComponent},
  {path: 'awesome/:id', component: EditComponent},
  {path: 'awesome/show/:id', component: ShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
