import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule }  from '@angular/common/http';
import { PostsService } from './posts.service';

const routes: Routes = [
  { path: '', component: PostsComponent }
];

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    HttpClientModule
  ],
  providers: [PostsService]
})
export class PostsModule { }
