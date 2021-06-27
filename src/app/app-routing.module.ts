import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
    { path: 'contact-us', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)},
    { path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)},
    { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)},
    { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)},
    { path: 'new-category', loadChildren: () => import('./category-form/category-form.module').then(m => m.CategoryFormModule)},
    { path: 'edit-category/:id', loadChildren: () => import('./category-form/category-form.module').then(m => m.CategoryFormModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
