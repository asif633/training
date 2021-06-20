import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  loading: boolean;
  posts: any[];

  constructor(private http: HttpClient, private postServ: PostsService) { }

  ngOnInit(): void {
    //this.loadPostsSubs();
    //this.loadPostsAsync();
    this.loadPosts();
  }

  ngOnDestroy() {
    
  }

  loadPostsSubs() {
    this.loading = true;
    this.http.get(`https://jsonplaceholder.typicode.com/post`).subscribe((result: any) => {
      this.loading = false;
      this.posts = result;
    }, err => {
      console.log('err', err);
      this.loading = false;
      this.posts = [];
    });
  }

  async loadPostsAsync() {
    try {
      this.loading = true;
      const res: any = await this.http.get(`https://jsonplaceholder.typicode.com/posts`).toPromise();
      
      this.loading = false;
      this.posts = res;
    } catch (error) {
      console.log('err', error);
      this.posts = [];
      this.loading = false;
    }
  }

  async loadPosts() {
    try {
      this.loading = true;
      const res: any = await this.postServ.loadPostsAsync();
      this.loading = false;
      this.posts = res;
    } catch (error) {
      console.log('err', error);
      this.posts = [];
      this.loading = false;
    }
  }

  loadPostsAsync1() {
    this.loading = true;
    this.http.get(`https://jsonplaceholder.typicode.com/posts`).toPromise()
    .then((res:any) => {
      this.loading = false;
      this.posts = res;
    }).catch(err => {
      console.log('err', err);
      this.posts = [];
      this.loading = false;
    });
  }

}
