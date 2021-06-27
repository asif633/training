import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryFormComponent } from './category-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesService } from '../categories/categories.service';

const routes: Routes = [
  { path: '', component: CategoryFormComponent }
];

@NgModule({
  declarations: [CategoryFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [CategoriesService]
})
export class CategoryFormModule { }
