import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class PostsService {
    
    constructor(private http: HttpClient) {}

    async loadPostsAsync() {
        return await this.http.get(`https://jsonplaceholder.typicode.com/posts`).toPromise();
    }

}